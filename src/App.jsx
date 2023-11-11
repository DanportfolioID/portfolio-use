import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";

import { useState } from "react";
import { MotionConfig } from "framer-motion";

function App() {

  const[section, setSection] = useState (0);




  return (
    <>

    
    <MotionConfig transition={{
      type: "spring",
      mass: 5,
      stiffness: 200,
      damping: 30,
      restDelta: 0.0001,

    }}>
    <Canvas shadows camera={{ position: [2, 4, 10], fov: 40 }}>
      <color attach="background" args={["#28282B"]}  />
   
      <ScrollControls pages={4} damping={0.1}>
      <Scroll>
      <Experience section={section} />
      </Scroll>
      <Scroll html>
      <Interface />
      </Scroll>
      
      </ScrollControls>
    </Canvas>
    </MotionConfig>
    </>
  );
}

export default App;
