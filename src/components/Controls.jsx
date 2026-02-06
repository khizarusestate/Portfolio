import {motion,AnimatePresence} from 'framer-motion'
import { useState,useEffect,useRef } from 'react'
export default function Controls({activeKey,setKey}){
    const [isAnime,setAnime] = useState(false);
    const soundController = useRef(null); 
    useEffect(()=>{
        const timeout = setTimeout(()=>setAnime(true),3000)
        return()=>clearTimeout(timeout)
    },[])
    return(
        <section className="h-full w-full absolute">
           <AnimatePresence>
             {
               activeKey>0&&(
                 <motion.p key={"Controls"} initial={{clipPath:"inset(0 100% 0 0)"}} animate={activeKey?{clipPath:"inset(0 0 0 0)"}:undefined} transition={{duration:0.5}} onClick={()=>(setKey((prev)=>(prev>1?5:prev-1)),soundController.current.play())} className="absolute top-[1%] left-[47%] text-[15px] text-blue-200 text-shadow-[0_0_10px_rgb(255,0,255)]  duration-200 hover:scale-120 cursor-pointer z-20">▲ Back</motion.p>
                 )}
           </AnimatePresence>
            <motion.p initial={{clipPath:"inset(0 100% 0 0)"}} animate={isAnime?{clipPath:"inset(0 0 0 0)"}:undefined} transition={{duration:0.5}} onClick={()=>(setKey((prev)=>(prev>4?0:prev+1)), soundController.current.play())} className="absolute top-[95%] left-[48%] text-[15px] text-blue-200 text-shadow-[0_0_10px_rgb(255,0,255)] duration-200 hover:scale-120 cursor-pointer z-20">▼ Next</motion.p>
            <audio ref={soundController} src="assets/BGM.m4a"></audio>
        </section>
    )
}