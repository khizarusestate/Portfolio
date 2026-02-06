import {useState} from 'react';
import { motion,AnimatePresence } from 'framer-motion';
export default function Intro({activeKey}){
   const [isIntroBoxAnime,setIntroBoxAnime]=useState(false);
    return(
      <AnimatePresence>
      {
        activeKey===1&&(
           <motion.section key={"Intro"} initial={{y:105,scaleX:0.01}} animate={{y:0,scaleX:isIntroBoxAnime?1:0.001}} exit={{scaleX:0}}  onAnimationComplete={()=>{setTimeout(()=>{setIntroBoxAnime(true)},1000)}} className="w-[70vw] p-[20px] absolute top-[35%] left-[15%] flex flex-col justify-center items-center rounded-[5px] border border-blue-200 bg-[rgba(255,200,255,0.2)] shadow-[0_0_10px_rgb(100,200,255)]">
              <h1 className="text-[50px] text-blue-200 font-bold">Hi!</h1>
              <p  className=" text-blue-200 text-center text-[25px] ">I’m a passionate Software Engineer and Web Developer who enjoys building clean, efficient, and user-friendly applications. I have hands-on experience working on real-world projects, especially in web development. I’m always eager to learn new technologies and turn ideas into practical, scalable solutions.</p>
           </motion.section>
        )
      }
     </AnimatePresence>
    )
}