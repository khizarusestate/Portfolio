import { motion } from "framer-motion";
export default function Particles(){
    return(
     <section className="h-full w-full absolute inset-0">
        {
            Array.from({length:30}).map((_,i)=>(
                <motion.div key={i} initial={{x:Math.random()*1200,y:Math.random()*350}} animate={{x:Math.random()*1200,y:Math.random()*350}} transition={{duration:100,repeat:Infinity,ease:"linear"}} className="h-[3px] w-[3px] rounded-[50%] bg-purple-400 shadow-[0_0_10px_rgb(255,255,255)]"></motion.div>
            ))
        }
     </section>
)
}