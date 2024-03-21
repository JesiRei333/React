export default function StatusOff (props){
    return(

    <article className="inline-block text-center font-semibold whitespace-nowrap p-[2px] ">
 

{props.nameStatus == false && 

<div className={" sm: items-center min-h-[30px] lg:flex place-content-evenly space-x-2 text-[14px]  text-[rgb(255_255_245/86%]" +  " " + props.className}>
        
        <section className=" flex items-center lg:grid grid-cols-2 ">
        <div className="sm: min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] lg: flex  bg-slate-800 rounded-[100%] h-[30] w-[30]">{ <img src={props.nameImg} alt="" /> ||"♥" } </div>
        <div className="sm: hidden lg:flex intems-center">{props.nameStreamer ||"♥" }</div>
       </section>
        <span className="sm: hidden lg:flex tex-[20px] pl-0 ">Desconectado</span>  
        </div>





}

        </article>
    )
}
