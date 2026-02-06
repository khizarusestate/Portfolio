import { motion,AnimatePresence } from "framer-motion";
export default function ProfSumm({activeKey}){
    return(
        <AnimatePresence>
        {
          activeKey===3&&(
            <motion.section key={"ProfSumm"} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="h-[70vh] w-[70vw] absolute top-[24%] left-[14%] flex flex-col justify-center items-center gap-[20px] overflow-hidden">
               <motion.h1 initial={{clipPath:"inset(0 100% 0 0)"}} animate={{clipPath:"inset(0 0 0 0)"}} transition={{duration:1}} exit={{clipPath:"inset(0 0 0 100%)"}} className="text-[30px] text-blue-200 font-bold text-shadow-[0_0_10px_rgb(255,0,255)]">Professional Summary</motion.h1>
               <motion.article initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} exit={{y:100,opacity:0}} className="w-[40vw] p-[5px] text-center text-blue-200 text-[15px] rounded-[10px] bg-[rgba(100,200,255,0.2)] shadow-[0_0_10px_rgb(100,200,255)]">
                   <h1 className="text-[20px] font-bold text-purple-300">MindSpire software house</h1>
                   <h2>Duration: 6 Months</h2>
                   <p>Summary: Contributed to real-world software projects, developing problem-solving skills by addressing real-life challenges and performing debugging to identify and fix software bugs.</p>
               </motion.article>
               <motion.article initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} exit={{y:100,opacity:0}} className="w-[40vw] p-[5px] text-center text-blue-200 text-[15px] rounded-[10px] bg-[rgba(100,200,255,0.2)] shadow-[0_0_10px_rgb(100,200,255)]">
                   <h1 className="text-[20px] font-bold text-purple-300">Self Training</h1>
                   <h2>Duration: 2 Years</h2>
                   <p>Summary: Engaged in self-learning and practical training through the development of independent projects, focusing on real-world problem solving and technical implementation.</p>
               </motion.article>
            </motion.section>
          )
        }
     </AnimatePresence>
    )
}