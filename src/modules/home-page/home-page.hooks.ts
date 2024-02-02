import { useEffect, useState, useRef } from 'react';
import {
  TUseHomePageLogicRes,
  useBGSpaceRes,
} from '@/modules/home-page/home-page.types';
import * as THREE from 'three';

export const useHomePageLogic = (): TUseHomePageLogicRes => {
  const [systemIsReady, setSystemIsReady] = useState(false);
  const onClickPowerButton = async () => {
    setTimeout(() => {
      // Finish all animations before show chat screen
      setSystemIsReady(true);
    }, 1300);
  };

  return { systemIsReady, onClickPowerButton };
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
        uniform vec3 color;
attribute float size;
attribute float flashOffset; // New attribute for flash offset
varying float vFlashOffset;

void main() {
    vFlashOffset = flashOffset; // Pass flash offset to fragment shader
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}
      `,
      fragmentShader: `
        uniform vec3 color;
uniform float time;
varying float vFlashOffset; // Receive the flash offset

void main() {
    // Transform gl_PointCoord to range -0.5 to 0.5
    vec2 coord = gl_PointCoord - 0.5;
    // Calculate the distance from the center in both directions
    float dist = abs(coord.x) + abs(coord.y);
    // Create a diamond shape by adjusting the alpha. The closer dist is to 0.5, the more visible the fragment is
    float alpha = 1.0 - smoothstep(0.45, 0.5, dist); // Smooth edges of the diamond

    // Flashing effect
    float flash = abs(sin(time + vFlashOffset));

    gl_FragColor = vec4(color * flash, alpha);
}
      `,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    const starSizes = new Float32Array(10000);
    const flashOffsets = new Float32Array(10000); // Assuming 10000 stars
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
      starSizes[i] = Math.random() * 2 + 1; // Sizes between 1 and 3
      flashOffsets[i] = Math.random() * 2 * Math.PI; // Random phase offset for each star
    }

    starGeometry.setAttribute(
      'flashOffset',
      new THREE.BufferAttribute(flashOffsets, 1),
    );
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3),
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    let time = 0;
    const animate = function () {
      requestAnimationFrame(animate);

      time += 0.05;
      starMaterial.uniforms.time.value = time;

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

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
        bgSpaceSceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return { bgSpaceSceneRef };
};
