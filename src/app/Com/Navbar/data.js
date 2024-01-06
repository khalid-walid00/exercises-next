import { useContext } from "react"
import { Theme } from "../Context/LightandDark"
const Lightswitch = ()=>{
const {mode,toggle}=useContext(Theme)

    const light = (
    <div  onClick={toggle} className=" border-zinc-200 border-2 rounded-2xl  w-20 px-3 py-2 my-2 flex flex-row justify-between">
      <div className="text-white">L</div>
      <button
       
        style={mode === "light" ? { left: "22px" } : { right: "22px" }}
        className="circle bg-black bg-opacity-35 border border-lime-500 w-1/2 relative right-5 rounded-full"
      ></button>
      <div className="text-black">D</div>
    </div>
  );
    
    
    return light

}

export const Links = [
    {
        id:0,
        path:"#",
        name:<Lightswitch/>,
    }, {
        id:2,
        path:"/about",
        name:"about",
    },
    {
        id:3,
        path:"/Portiflio",
        name:"Portiflio",
    },
    {
        id:4,
        path:"/Com/Badge/Blog",
        name:"Blog",
    },
    {
        id:5,
        path:"/Contant",
        name:"Contant",
    }
    
]