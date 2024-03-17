export default function StatusOff (props){
    return(

    <article className="inline-block text-center font-semibold whitespace-nowrap p-[6px] ">
 

{props.nameStatus !== true && 
 <div className={" grid grid-cols-4 rounded-[20px] p-[0_20px] leading-[38px] text-[14px]  text-[rgb(255_255_245/86%]" +  " " + props.className}>
 <div className=" bg-slate-800 rounded-[100%] h-[30] w-[30]">{ <img src={props.nameImg} alt="" /> ||"♥" } </div>
 <span>{props.nameStreamer ||"♥" }</span>
 <span className="tex-[20px] pl-0 ">Desconectado</span>  
 </div>

}

        </article>
    )
}
