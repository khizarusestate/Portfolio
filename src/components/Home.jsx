import {useState,useEffect} from 'react';
import { motion } from 'framer-motion';
export default function Home({activeKey}){
/*___________________________________________States_____________________________________*/
 const [isFallingAnimation,setFallingAnimation] = useState(false);
 const [isIconsAnimations,setIconsAnimations] = useState(false);
 const [isImageAnimation,setImageAnimations] = useState(false);
 const [isNameAnimation,setNameAnimation] = useState(false);
 const [isTitleAnimation,setTitleAnimation] = useState(false);
 const icon=["Github","MongoDB","Express.JS","React.JS","Node.JS","Electron.JS","TailwindCSS"]
/*_____________________________________Animations Handlers_____________________________________*/
useEffect(()=>{
    const timeOut = setTimeout(()=>setFallingAnimation(true),2000);
    return()=>clearTimeout(timeOut);
  },[])
useEffect(()=>{
    const timeOut = setTimeout(()=>setImageAnimations(true),3000);
    return()=>clearTimeout(timeOut);
  },[])
const iconsAnimationsHandler = (index)=>{return index === 0? -240 : index === 1? -160 : index === 2?  -80 : index === 4?  80 : index===5? 160 : index===6? 240: 0}
    return(
/*___________________________________________Home Section_____________________________________*/
        <section className='h-full w-full absolute'>
              <motion.img initial={{opacity:0}} animate={isImageAnimation?{opacity:1,x:activeKey>0?-500:0}:undefined} transition={{duration:0.3}} onAnimationComplete={()=>setNameAnimation(true)} src="./assets/Developer.png" alt="Software Enginner" className="h-[300px] absolute top-[3%] left-[40%]"/>  
              <motion.h1 initial={{clipPath:"inset(0 100% 0 0)"}} animate={isNameAnimation?{clipPath:"inset(0 0 0 0)",y:activeKey>0?-250:0}:undefined} transition={{duration:0.3}} onAnimationComplete={()=>setTitleAnimation(true)} className="absolute top-[47%] left-[31%] text-[50px] font-bold text-blue-300 text-shadow-[0_0_30px_rgb(255,0,255)]">ENG. KHIZAR HAYAT</motion.h1>
              <motion.h2 initial={{clipPath:"inset(0 100% 0 0)"}} animate={isTitleAnimation?{clipPath:"inset(0 0 0 0)",y:activeKey>0?-250:0}:undefined} transition={{duration:0.3}} className="absolute top-[57%] left-[40%] text-[30px] text-purple-300 text-shadow-[0_0_10px_rgb(255,0,255)]">Software Engineer</motion.h2> 
              {
                 icon.map((items,index)=>(
                     <motion.img key={index} initial={{y:-1000}} animate={isFallingAnimation?{y:0,x:isIconsAnimations?iconsAnimationsHandler(index):0,opacity:activeKey>0?0:1}:undefined} onAnimationComplete={index===3?()=>setIconsAnimations(true):undefined} src={`./assets/${items}.png`} alt={items} className={ ` ${!isIconsAnimations&&index!==3?"hidden":"block"} h-[50px] absolute top-[73%] left-[48%] drop-shadow-[0_0_10px_rgb(100,200,255)]`}/>
               ))}
               <motion.div initial={{scaleX:0,scaleY:0}} animate={{scaleX:1,scaleY:1}} transition={{duration:2}} className={`${isIconsAnimations?"hidden":"block"} absolute top-[73%] left-[48%] h-[50px] w-[50px] rounded-[50%] bg-[rgba(0,0,0,0.4)]`}></motion.div>
        </section>
    )

}
