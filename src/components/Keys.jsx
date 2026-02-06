import {useState,useEffect,useRef} from 'react';
export default function Keys({setKey}){
    const soundController = useRef(null);
    useEffect(()=>{
        const keysHandlers = (e)=>{
            if(e.key==="ArrowDown")
            {
                setKey((prev)=>(prev>4?0:prev+1))
                soundController.current.play();
            }
            if(e.key==="ArrowUp")
            {
                setKey((prev)=>(prev<1?5:prev-1))
                soundController.current.play();
            }
        }
        window.addEventListener("keydown",keysHandlers)
        return()=>window.removeEventListener("keydown",keysHandlers)
    },[])
    return(
        <audio ref={soundController} src="/assets/BGM.m4a"></audio>
    )
}