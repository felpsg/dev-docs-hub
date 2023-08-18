import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import videoSource from '../assets.js/images/video.mp4'; // Importar o vídeo
import codeTexture1 from '../assets.js/images/code1.jpg';
import codeTexture2 from '../assets.js/images/code2.jpg';
import codeTexture3 from '../assets.js/images/code3.jpg';
import '../assets.js/styles/home.css';


const RotatingBlock = ({
  position,
  texture,
  rotationSpeed = 0.01,
  scale = 1.5,
}) => {
  const loadedTexture = useLoader(TextureLoader, texture);
  const ref = React.useRef();

  // Adicionando rotação dentro da animação de frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += rotationSpeed;
      ref.current.rotation.y += rotationSpeed;
    }
  });

  const handleMouseOver = (e) => {
    e.object.scale.set(scale, scale, scale);
    document.body.style.cursor = 'pointer'; // Alterar o cursor para "mãozinha"
  };

  const handleMouseOut = (e) => {
    e.object.scale.set(1, 1, 1);
    document.body.style.cursor = 'default'; // Voltar o cursor ao padrão
  };

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={handleMouseOver}
      onPointerOut={handleMouseOut}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={loadedTexture} />
    </mesh>
  );
};

const Loading = () => (
  <mesh position={[0, 0, 0]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={'#888'} />
  </mesh>
);

const Home = () => (
  <div className="home">
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
    <h1 className="title">
      Bem vindo ao<span>CodeHub</span>
    </h1>
    <p>
      Você encontrará documentações completas e atualizadas sobre
      <br /> várias tecnologias front-end. Navegue por guias, tutoriais e
      referências <br /> abrangentes.
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
    <div className="additional-section">
      <h2>Explore Mais Tecnologias</h2>
      <p>
        Descubra mais sobre as linguagens de programação, frameworks e
        bibliotecas mais recentes em nosso repositório.
      </p>
    </div>
  </div>
);

export default Home;
