import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarsBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.7 });

    const starVertices = [];
    for (let i = 0; i < 30000; i++) { 
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); 
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); 
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); 
      
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      starField.position.x = mouseX * 10; 
      starField.position.y = mouseY * 10;

      const positions = starField.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const dx = mouseX * 1000 - positions[i];
        const dy = mouseY * 1000 - positions[i + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) { 
          const force = (200 - distance)*0.55 ; 
          const angle = Math.atan2(dy, dx);
          positions[i] -= Math.cos(angle) * force;
          positions[i + 1] -= Math.sin(angle) * force;
        }
      }
      starField.geometry.attributes.position.needsUpdate = true;
    };

    window.addEventListener('mousemove', onMouseMove);

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="stars-background" />;
};

export default StarsBackground;