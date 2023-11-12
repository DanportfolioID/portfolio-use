import { motion } from "framer-motion";
import { useAtom } from "jotai";
import CountUp from 'react-countup';
import { Projects, currentProjectAtom, projects } from "./Projects";


const Section = (props) => {
    const {children} = props;

    return (
    <motion.section 
      className={`
      h-screen w-screen p-8 max-w-screen-2xl
      mx-auto flex flex-col items-start justify-center`}
      initial={{
      opacity: 0,
      y: 50,

    }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
      duration: 1,
      delay: 0.5,},
    }}
    >
      {children}
      </motion.section>
    );
};

export const Interface = () => {
return (
<div className="flex flex-col items-center w-screen">
 <AboutSection />
 <SkillsSection />
 <br/>
 <ProjectsSection />
 <ContactSection/>
</div>
);
};

const AboutSection = () => {
   return (
   <Section>
         <h1 className="text-lg text-lime-600 mt-4 font-extrabold  leading-snug mt-10 md:mt-10">
            Hi, I'm
            <br />
           <span className="h10 text-6xl italic">Danson Loi</span>
         </h1>
      
      <motion.p className="text-2xl text-lime-500  font-extrabold italic"
         initial={{
         opacity: 0,
         y: 25,
         }}
         whileInView={{
         opacity: 1,
         y: 0,
        }}
        transition={{
        duration: 1,
        delay: 1.8,
        }}>
            
       <br />
        Lead Designer @ THE MAKEOVER GUYS

      </motion.p>

     

        
   </Section>
   );};


   const skills = [
    {
      title: "✍️ Interior 3D Design & Visualisation",
    },
    {
      title: "📐Layout - Space Planning",
    },
    {
      title: " 🪚Custom Furniture Designs",
    },
    {
      title: "💡Lighting & Wiring Designs",
    },
    {
      title: " 🏗️ Project Timeline & Site Management",
    },
    
    
  ];
  const languages = [
    {
      title: "Residential ",
    },
    {
      title: "Commercial Projects", 
    },
    
  ];
  
  const SkillsSection = () => {
    return (
      <Section>
        <motion.div className="w-full" whileInView={"visible"}>
          <h2 className="text-8xl  font-bold text-white">Since SEP 2017</h2>
          <div className="mt-6 space-y-2">
            {skills.map((skill, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-0.5xl font-bold text-lime-300"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                
                
                
              </div>
              
            ))}
            
          </div>
          <h2 className="text-1xl font-bold text-lime-500">. </h2>
          
          <div>
            <h2 className="text-4xl md:text-4xl font-bold mt-2 text-white">
              Completed Projects 
            </h2>
            <h2 className="text-1xl font-bold text-lime-500">. </h2>


            
            
          </div>
          
          <h3 className="text-2xl md:text-2xl font-bold mt-2 text-white">
              Residential Highrise 🏢
            </h3>
          <CountUp end={550} duration={30} className="text-4xl font-bold text-lime-500"/>
          <h3 className="text-2xl  font-bold mt-2 text-lime-500">
              Units
            </h3>
            <h2 className="text-1xl font-bold text-lime-500">. </h2>

            <h3 className="text-2xl md:text-2xl font-bold mt-2 text-white">
              Landed 🏠
            </h3>
          <CountUp end={4} duration={30} className="text-4xl font-bold text-lime-500"/>
          <h3 className="text-2xl  font-bold mt-2 text-lime-500">
              Units
            </h3>
        </motion.div>
      </Section>
    );
  };
  
  const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  
    const nextProject = () => {
      setCurrentProject((currentProject + 1) % projects.length);
    };
  
    const previousProject = () => {
      setCurrentProject((currentProject - 2 + projects.length) % Projects.length);
    };
  
    return (
      <Section>
        <div className="flex w-full h-full gap-10 items-center justify-center">
      
          <h2 className="text-5xl font-bold text-lime-500">Featured Portfolio</h2>
          <button
            className="text-3xl hover: transition-colors text-lime-500"
            onClick={nextProject}
          >
            Next →
          </button>
        </div>
      </Section>
    );
  };

   const ContactSection = () => {
         return (
          <Section>
            
          <h2 className="text-6xl text-lime-500 font-bold">Contact me</h2><br/>
          <h3 className="text-3xl text-lime-500 font-bold">📞 0172953100</h3>
          <h3 className="text-3xl text-lime-500 font-bold">📧 danson.makeover@gmail.com</h3>
          <div className="mt-5 p-10 rounded-md bg-white w-100 max-w-">
            <form>
              <label for="name" className="font-medium text-gray-900 block mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                     Phone number
              </label>
              <input
                type="phonenumber"
                name="phonenumber"
                id="phonenumber"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <button className="bg-indigo-500 text-white py-3 px-8 rounded-lg font-bold text-lg mt-16 ">
                Submit
              </button>
            </form>
          </div>
        </Section>
        

         );


    
   }
