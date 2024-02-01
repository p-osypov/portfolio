import { useEffect, useState, useRef } from 'react';
import { TUseHomePageLogic } from '@/modules/home-page/types';
import * as THREE from 'three';

export const useHomePageLogic = (): TUseHomePageLogic => {
  const [systemIsReady, setSystemIsReady] = useState(false);
  const bgSpaceSceneRef = useRef<HTMLDivElement | null>(null);
  const onClickPowerButton = async () => {
    setTimeout(() => {
      // Finish all animations before show chat screen
      setSystemIsReady(true);
    }, 1300);
  };

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
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3),
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

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
  return { systemIsReady, onClickPowerButton, bgSpaceSceneRef };
};
