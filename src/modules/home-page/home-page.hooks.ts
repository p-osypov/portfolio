import { useEffect, useState, useRef } from 'react';
import {
  TUseHomePageLogicRes,
  useBGSpaceRes,
} from '@/modules/home-page/home-page.types';
import * as THREE from 'three';

export const useHomePageLogic = (): TUseHomePageLogicRes => {
  const [systemIsActivated, setSystemIsActivated] = useState(false);
  const onClickPowerButton = async () => {
    setTimeout(() => {
      // Finish all animations before show chat screen
      setSystemIsActivated(true);
    }, 1300);
  };

  return { systemIsActivated, onClickPowerButton };
};

export const useBGSpace = (): useBGSpaceRes => {
  const bgSpaceSceneRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Direct null check
    if (bgSpaceSceneRef.current === null) return;

    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    bgSpaceSceneRef.current.appendChild(renderer.domElement);

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
        color: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        // Removed: uniform vec3 color;
        attribute float size;
        attribute float flashOffset; // New attribute for flash offset
        varying float vFlashOffset;
        attribute vec3 color; // Correctly declared as an attribute
        varying vec3 vColor; // Pass color to the fragment shader
        
        void main() {
            vColor = color; // Assign the color to varying
            vFlashOffset = flashOffset; // Pass flash offset to fragment shader
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = max(size * (300.0 / -mvPosition.z), 2.0);
            gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying float vFlashOffset; // Receive the flash offset
        varying vec3 vColor; // Receive the star's color
        
        void main() {
            // Transform gl_PointCoord to range -0.5 to 0.5
            vec2 coord = gl_PointCoord - 0.5;
            // Calculate the distance from the center in both directions
            float dist = abs(coord.x) + abs(coord.y);
            // Create a diamond shape by adjusting the alpha. The closer dist is to 0.5, the more visible the fragment is
            float alpha = 1.0 - smoothstep(0.45, 0.5, dist); // Smooth edges of the diamond
            float flash = abs(sin(time + vFlashOffset));
            gl_FragColor = vec4(vColor * flash, alpha); // Use vColor here
        }
      `,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    const starSizes = new Float32Array(5000);
    const flashOffsets = new Float32Array(5000);
    const starVertices = [];
    const colors = new Float32Array(5000 * 3); // 3 components (r, g, b) for each star

    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
      starSizes[i] = Math.random() * 5 + 1;
      flashOffsets[i] = Math.random() * 2 * Math.PI; // Random phase offset for each star
      const isCustomColor = Math.random() > 0.6;
      const color = isCustomColor
        ? new THREE.Color(0x00ff41)
        : new THREE.Color(0xffffff);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    starGeometry.setAttribute(
      'flashOffset',
      new THREE.BufferAttribute(flashOffsets, 1),
    );
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3),
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 5;

    // Animation loop
    let time = 0;

    const animate = function () {
      requestAnimationFrame(animate);

      time += 0.05;
      starMaterial.uniforms.time.value = time;

      // Calculate the movement and check positions for each star
      const positions = starGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += 5; // Move star along z-axis towards the camera

        // If the star has passed the camera or moved out of the visible area
        if (positions[i + 2] > 500) {
          // Reset the star to a new position far away from the camera
          positions[i] = (Math.random() - 0.5) * 2000; // New random x position
          positions[i + 1] = (Math.random() - 0.5) * 2000; // New random y position
          positions[i + 2] = (Math.random() - 0.5) * 2000 - 2500; // New random z position, ensuring it's far away
        }
      }
      starGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Handle window resize
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    animate();

    // Cleanup
    return () => {
      if (bgSpaceSceneRef.current) {
        bgSpaceSceneRef.current?.removeChild(renderer.domElement);
      }
    };
  }, []);
  return { bgSpaceSceneRef };
};
