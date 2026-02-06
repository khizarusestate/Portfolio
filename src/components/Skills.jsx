import {motion,AnimatePresence} from 'framer-motion';
import { useState } from 'react';
export default function Skills({activeKey}){
    const [skillsAnimation,setSkillsAnimation] = useState(0);
    const skills=["MongoDB","Express.JS","React.JS","Node.JS","Electron.JS","TailwindCSS"]
    return(
    <AnimatePresence>
      {
        activeKey===2&&(
           <motion.section key={"Skills"} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className="h-[70vh] w-[70vw] absolute top-[24%] left-[14%] flex flex-col justify-center items-center gap-[50px]">
             <motion.h1 initial={{clipPath:"inset(0 100% 0 0)"}} animate={{clipPath:"inset(0 0 0 0)"}} transition={{duration:1}} onAnimationComplete={()=>setSkillsAnimation((prev)=>(prev+1))} className="text-[30px] text-blue-200 font-bold text-shadow-[0_0_10px_rgb(255,0,255)]">Explore my Experties</motion.h1>
             <article className="grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
              {
                skills.map((items,index)=>(
                  <motion.figure key={index} initial={{clipPath:"inset(0 100% 0 0)"}} animate={skillsAnimation>=index+1?{clipPath:"inset(0 0 0 0)"}:{}} transition={{duration:0.5}} onAnimationComplete={()=>setSkillsAnimation((prev)=>(prev+1))} className="h-[60px] w-[350px] w-[70%] flex justify-center items-center gap-[30px] rounded-[6px] bg-[rgba(150,200,255,0.2)] relative">
                       <img src={`assets/${items}.png`} alt={items} className="h-[50px] absolute top-[8%] left-[5%]"/>
                       <figcaption className="absolute top-[20%] left-[30%] text-blue-200  text-[20px] text-shadow-[0_0_10px_rgb(255,0,255)]">{items}</figcaption>
                       <h1 className="absolute top-[8%] left-[75%] text-blue-200">Proficiency</h1>
                       <p className="absolute top-[40%] left-[77%] text-blue-200">{index===0||index===4?"★★★★":"★★★★★"}</p>
                  </motion.figure>
                  ))
              }
             </article>
          </motion.section>
        )
      }
     </AnimatePresence>
    )
}