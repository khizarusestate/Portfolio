import {motion,AnimatePresence} from 'framer-motion'
import { useState,useRef } from 'react';
export default function Contact({activeKey}){
    const contact  =[{title:"Contact me",icon:"📞",href:"tel:+923277522098"},{title:"Mail me",icon:"📧",href:"mailto:info@example.com"},{title:"Visit me",icon:"📍",href:"https://maps.google.com/?q=Lahore"},{title:"GitHub",img:"./assets/Github.png",href:"https://github.com/khizarusestate"}];
    const [email,setEmail] = useState("");
    const [help,setHelp] = useState("");
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("");
    const audioController = useRef(null);
    const formHandler = async(e)=>{
      e.preventDefault();
      setLoading(true);
      try{
        const data = {email,help};
        const req =  await fetch("https://server-eta-nine-44.vercel.app/api/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
         })
         if (req.ok)
            {
              setLoading(false);
              setMessage("Your request was sent!")
              setEmail("");
              setHelp("");
            }
         else
            {
              setLoading(false);
              setMessage("Server Error! Please try again.")
              }}
      catch(err){
        {
          setLoading(false);
          setMessage("Network Error!");
        }
      };
    }
    return(
    <AnimatePresence>
       { 
           activeKey===5&&(
          <section className='h-full w-full absolute'>
              <motion.form onSubmit={formHandler} key={"Conatct"} initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}} exit={{x:100,opacity:0}} className="absolute top-[30%] left-[30%] flex flex-col justify-center items-center gap-[15px] text-blue-200">
                 <motion.h1 initial={{clipPath:"inset(0 100% 0 0)"}} animate={{clipPath:"inset(0 0 0 0)"}} transition={{duration:1}} exit={{clipPath:"inset(0 0 0 100%)"}} className="text-[30px] text-blue-200 font-bold text-shadow-[0_0_10px_rgb(255,0,255)]">Get in touch with me</motion.h1>
                 <input type="email" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-[300px] border-b-2 text-center z-30 outline-none"/>
                 <textarea placeholder="How can I help you?" value={help} onChange={(e)=>setHelp(e.target.value)} required className="h-[150px] w-[500px] text-center rounded-[10px] outline-none bg-[rgba(100,200,255,0.2)] shadow-[0_0_10px_rgb(100,200,255)] z-30 "></textarea>
                 <button type='submit' className='h-[40px] w-[100px] rounded-[10px] text-purple-900 font-bold text-[20px] bg-blue-200 hover:scale-120 duration-200 hover:text-blue-200 hover:bg-purple-900 active:scale-100 cursor-pointer z-30' onClick={()=>audioController.current.play()}>Submit</button>
              </motion.form>
              <motion.article initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} exit={{y:100,opacity:0}} className="absolute top-[84%] left-[27%] p-[10px] flex gap-[50px] rounded-[10px]  z-30 shadow-[0_0_10px_rgb(100,200,255)]">
              {
                contact.map((items,index)=>(
                  <a  key={index} href={items.href} className="flex justify-center items-center text-blue-200 gap-[10px] bg-[rgba(100,200,255,0.2)] shadow-[0_0_10px_rgb(100,200,255)]">
                     <p>{items.icon}</p>
                     <img src={items.img} className={`${index!==3?"hidden":"block"} h-[30px]`}  />
                     <h1>{items.title}</h1>
                  </a>
                ))
              }
            </motion.article>
            <AnimatePresence>
               {
                message!==""&&(
                  <>
                  <motion.article initial={{scaleX:0}} animate={{scaleX:1}} exit={{scaleX:0}} className='absolute top-[30%] left-[34%] h-[200px] w-[400px] flex flex-col justify-center items-center gap-[20px] text-blue-200 rounded-[10px] border bg-[rgba(100,200,255,0.2)] z-50'>
                     <p className='text-[30px] text-center'>{message}</p>
                      <button className='h-[50px] w-[50px] text-[20px] text-purple-900 font-bold rounded-[50%] duration-300 bg-blue-200 hover:scale-120 hover:bg-purple-900 hover:text-blue-200 cursor-pointer active:scale-100 ' onClick={()=>{setMessage(""),audioController.current.play();}}> OK</button>
                 </motion.article>
                 <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className='h-full w-full absolute bg-[rgba(255,255,255,0.2)] backdrop-blur-[10px] z-40'></motion.div>
                 </>
                )
               }
            </AnimatePresence>
            <AnimatePresence>
               {
                loading&&(
                  <>
                  <motion.article initial={{scaleX:0}} animate={{scaleX:1}} exit={{scaleX:0}} className='absolute top-[40%] left-[38%] h-[100px] w-[300px] flex flex-col justify-center items-center gap-[20px] text-blue-200 rounded-[10px] border bg-[rgba(100,200,255,0.2)] z-50'>
                     <p className='text-[30px]'>Please Wait...</p>
                 </motion.article>
                 <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className='h-full w-full absolute bg-[rgba(255,255,255,0.2)] backdrop-blur-[10px] z-40'></motion.div>
                 </>
                )
               }
            </AnimatePresence>
            <audio ref={audioController} src="./assets/BGM.m4a"></audio>
         </section>
           )
       }
     </AnimatePresence>
    )

}


