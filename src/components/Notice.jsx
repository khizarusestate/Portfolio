import {motion,AnimatePresence} from 'framer-motion'
import { useEffect,useState,useRef } from 'react'
export default function Notice(){
    const [isNoticeVisible,setNoticeVisible] = useState(false);
    const audioController = useRef(null);
    useEffect(()=>{
        const timeout = setTimeout(()=>setNoticeVisible(true),5000)
    },[])
    return(
       <AnimatePresence>
         {
            isNoticeVisible&&(
            <motion.section key={"Notice"} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0.01}} transition={{duration:0.5}} className="h-full w-full absolute flex justify-center items-center bg-[rgba(255,255,255,0.2)] backdrop-blur-[10px]">
               <motion.article initial={{scaleX:0.01}} animate={{scaleX:1}} exit={{scaleX:0.01}} className='h-[200px] w-[500px] flex flex-col justify-center items-center gap-[20px] border rounded-[10px] border-blue-200 bg-[rgba(255,200,255,0.2)] z-50'>
                   <h1 className='md:hidden block text-[20px] text-blue-200'>This verions is compitable with Dextop. Android version is comming soon!</h1>
                   <h1 className='md:block hidden text-[20px] text-blue-200'>Press "DOWN" to Continue and "UP" to go Back</h1>
                   <p className='text-[15px] text-blue-200'>Portfolio is Designed by Eng. Khizar Hayat</p>
                   <button className='md:block hidden h-[50px] w-[50px] text-[20px] text-purple-900 font-bold rounded-[50%] duration-300 bg-blue-200 hover:scale-120 hover:bg-purple-900 hover:text-blue-200 cursor-pointer active:scale-100 ' onClick={()=>{setNoticeVisible(false),audioController.current.play();}}> OK</button>
                   <audio ref={audioController} src="./assets/BGM.m4a"></audio>
               </motion.article>
            </motion.section>
            )
         }
       </AnimatePresence>
    )

}
