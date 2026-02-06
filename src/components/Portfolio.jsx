import { motion,AnimatePresence } from "framer-motion"
export default function Portfolio({activeKey}){
    const portfolio = [{title:"The Forge",disc:"A Landing page for Gymnasium",tech:["React.JS","Node.JS","TailwindCSS"],link:"https://theforge.vercel.app"},{title:"InoByte",disc:"A Porfolio Page for IT Company",tech:["React.JS","Node.JS","TailwindCSS"],link:"https://inobyte.vercel.app"},{title:"HealthSpire",disc:"Portflio Page for Medical Software",tech:["React.JS","Node.JS","TailwindCSS"],link:"https://healthspire.vercel.app"}];
    return(
    <AnimatePresence>
        {
          activeKey===4&&(
            <motion.section key={"Portfolio"} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="h-[70vh] w-[70vw] absolute top-[24%] left-[14%] flex flex-col justify-center items-center gap-[20px]">
                <motion.h1 initial={{clipPath:"inset(0 100% 0 0)"}} animate={{clipPath:"inset(0 0 0 0)"}} transition={{duration:1}} exit={{clipPath:"inset(0 0 0 100%)"}} className="text-[30px] text-blue-200 font-bold text-shadow-[0_0_10px_rgb(255,0,255)]">Portfolio</motion.h1>
                <article className="flex gap-[20px]">
                  {
                    portfolio.map((items,index)=>(
                      <motion.div key={index} initial={{scaleX:0.01}} animate={{scaleX:1}} transition={{duration:0.5}} exit={{scaleX:0}} className="w-[30vw] p-[10px] text-blue-200 text-center z-10 rounded-[10px] bg-[rgba(255,200,255,0.2)] shadow-[0_0_10px_rgb(100,200,255)]">
                         <h1 className="text-[25px] font-bold">{items.title}</h1>
                         <p>Discription: {items.disc}</p>
                         <h1>Technology Used:</h1>
                         <ul>
                            {items.tech.map((c_items,c_index)=>(
                              <li key={c_index}>✓ {c_items}</li>
                            ))}
                        </ul>
                        <a target="_blank" href={items.link}>Click here to review</a>
                      </motion.div>
                    ))
                  }
                </article>
            </motion.section>
          )
        }
     </AnimatePresence>
    )
}