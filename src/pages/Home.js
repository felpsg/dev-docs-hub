import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import '../assets.js/styles/home.css';
import codeTexture1 from '../assets.js/images/code1.jpg';
import codeTexture2 from '../assets.js/images/code2.jpg';
import codeTexture3 from '../assets.js/images/code3.jpg';

import { useFrame } from '@react-three/fiber';

const RotatingBlock = ({ position, texture }) => {
  const loadedTexture = useLoader(TextureLoader, texture);
  const ref = React.useRef();

  // Adicionando rotação dentro da animação de frame
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={loadedTexture} />
    </mesh>
  );
};

const Loading = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#888'} />
    </mesh>
  );
};

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">
        <span>CodeHub</span>
      </h1>
      <p className="sub-title">
        Você encontrará documentações sobre várias tecnologias front-end.
      </p>
      <div className="canvas-container">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={<Loading />}>
            <RotatingBlock position={[-2, 0, 0]} texture={codeTexture1} />
            <RotatingBlock position={[2, 0, 0]} texture={codeTexture2} />
            <RotatingBlock position={[0, 0, 0]} texture={codeTexture3} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
