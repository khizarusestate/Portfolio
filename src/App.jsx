import Home from "./components/Home"
import Intro from "./components/Intro"
import Keys from "./components/Keys"
import Particles from "./components/Particles"
import { useState } from "react"
import Skills from "./components/Skills"
import ProfSumm from "./components/ProfSumm"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Controls from "./components/Controls"
import Notice from "./components/Notice"
export default function App(){
    const [activeKey,setKey] = useState(0)
    return(
        <main className="h-screen w-screen bg-[url('/assets/BG.png')] bg-center bg-cover bg-no-repeat relative">
            <Home activeKey={activeKey}/>
            <Intro activeKey={activeKey}/>
            <Skills activeKey={activeKey}/>
            <ProfSumm activeKey={activeKey}/>
            <Portfolio activeKey={activeKey}/>
            <Contact activeKey={activeKey}/>
            <Controls activeKey={activeKey} setKey={setKey}/>
            <Particles/>
            <Keys setKey={setKey}/>
            <Notice/>
        </main>
    )
}