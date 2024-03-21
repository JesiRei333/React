
export default function Boton(props){
    return(

   
        
    <article className="inline-block text-center font-semibold whitespace-nowrap p-[6px] ">

        <button className={"flex items-center min-h-[10px] min-w-[30px] max-h-[20px] rounded-[20px] p-[0_11px] leading-[38px] text-[12px] text-slate-400 text-[rgb(255_255_245/86%] " +  " " + props.className}> {props.textoBoton } </button>
       
      
        </article>
    )
}
