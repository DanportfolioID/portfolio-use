import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Beverly Height",
    url: "https://photos.app.goo.gl/wennumyiGDkStJTCA",
    image: "projects/beverly.jpeg",
    description: "Completed 2021 Location @ Ampang",
  },
  {
    title: "Paisley Residence",
    url: "https://photos.app.goo.gl/tM4vh8XhckJvQW9u9",
    image: "projects/paisley.jpeg",
    description: "Completed 2022 Location @ Tropicana Metropark",
  },
  {
    title: "Parque Residence",
    url: "https://photos.app.goo.gl/dZPoinY9s6J7ziQE6",
    image: "projects/parque.jpeg",
    description: "Complete 2021 Location @Eco Santuary",
  },
  {
    title: "Lumi Tropicana",
    url: "https://photos.app.goo.gl/DWqb2GqwzMi7nbESA",
    image: "projects/lumi1.jpeg",
    description: "Completed 2021 Location @Tropicana",
  },
  {
    title: "Co-working Office [In Progress]",
    url: "https://photos.app.goo.gl/tiwPKfGm6Rs8YQqS7",
    image: "projects/office.jpg",
    description: "Commercial Project In Progress Location @ Sunway Damansara",
  },

];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.02}
        onClick={() => window.open(project.url, "Project A")}
        ref={background}
      >
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial color="black" transparent opacity={1} />
      </mesh>
      <Image
        scale={[4, 4, 4]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={10}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.3}
        position={[-1.5, -2, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={3}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-1, -1.8, 1]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 7));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 1, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 6,
            y: currentProject === index ? 1.5 : -0.1,
            z: currentProject === index ? -1 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
