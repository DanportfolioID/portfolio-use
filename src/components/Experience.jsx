import { Float, OrbitControls, SpotLight } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";
import { Ofis } from "../Office";
import { Avatar } from "../Avatar";
import { Avatarcopy } from "../Avatar copy";
import { Projects } from "./Projects";









export const Experience = (props) => {
  const { section } = props;
  const {viewport} = useThree();
  return (
    <>
      
      <ambientLight intensity={0.05} />
      <SpotLight position={[2, 2.5, 2.8,]} scale={8}  /> 
      <SpotLight position={[1, 3, 3,]} scale={1}  /> 
      <motion.group 
      position={[1.5,2,3]} 
      scale={[0.9, 0.9, 0.9]} 
      rotation-y={-Math.PI /4}
      animate={{
        y: section === 0 ? 0 : -1,
      }}
      
       >
       <Avatar scale={1.5} position={[-0.7,0.1,0]} rotation-y={-Math.PI /1}/>
      <Ofis section={section} />
      
      
    
       
      </motion.group> 

       {/*SKILLS */}
       <motion.group position={[1.5, -1.5, -5]}
       scale={[1.5, 1.5, 1.5]} 
       rotation-y={-Math.PI /6}
       animate={{
        z: section === 1 ? 0: 0,
        y: section === 1 ? -viewport.height : -10,
       }}>       
       <ambientLight intensity={0.5} />
       <SpotLight position={[-1, 4, 0]} scale={5}  /> 
      <Float>
        
        
        
      <Avatarcopy scale={2}/>  
        
        
      </Float>
      </motion.group>
      <Projects />
      
    </>
  );
};
