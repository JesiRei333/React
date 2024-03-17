import Boton from "./boton"


export default function CardGames(props) {
    return(
        <article className="max-w-[167px] transition w-auto   leading-5 ">
            <div className=" bg-[rgb(14_14_16)] h-full ">
           <div className="max-w-[167px] min-h-[223px]  bg-purple-400">
            <img className= " max-w-[167px] max-h-[223px]  hover:translate-x-3 hover:translate-y-[-10px] " src={props.imgSrc} alt={props.imgAlt || <img src="./src/img/Sin título.png" alt="" />} /> 
            </div>
            <div className="grid grid-cols-[90%_10%]">
           
                <h3 className="text-[14px] text-neutral-300 hover:text-purple-400 font-semibold">{props.title}</h3>
                <button><img src="./src/img/mostrar-mas-boton-con-tres-puntos.png"/>
                </button>
                <p className="text-[13px] text-[rgb(109,116,130)]">{props.views}</p>
                <br />
                <div className="flex ">
                <Boton textoBoton= {props.textoBoton  || "View"}  className=" bg-[rgb(50_54_63)] hover:bg-[rgb(65_72_83)] "/> 
                </div>
                </div>
            </div>
        </article>
    )
}