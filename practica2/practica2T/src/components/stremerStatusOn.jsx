export default function StatusOn (props){
    return(

    <article className="inline-block text-center font-semibold whitespace-nowrap p-[2px] ">
    
{props.nameStatus== true &&
        <div className={" sm: min-h-[30px] min-w-[30px] lg:flex space-x-10 rounded-[20px] p-[0_20px] leading-[38px] text-[14px]  text-[rgb(255_255_245/86%]" +  " " + props.className}>
       
        <section className="lg:grid grid-cols-2 items-center">
        <div className="sm: min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] lg: bg-slate-800 rounded-[100%] h-[30] w-[30]">{ <img src={props.nameImg} alt="" /> ||"♥" } </div>
        <div className="sm: hidden lg:flex ">{props.nameStreamer ||"♥" }</div>
        </section>

        <section className="lg:flex whitespace-nowrap items-center">
        <div className="sm: hidden lg:flex  text-red-600">♥</div>  
        <span className="sm: hidden lg:flex  ">{props.nameViewer ||"♥" }</span>
        </section>

        </div>    
}

        </article>
    )
}
