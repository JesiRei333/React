export default function Card(props){
    return(

    
        
    <article className="Cards">
        
        <p className="icono"> {props.icono}</p>
        <p className="titulo"> {props.titulo}</p>
        <p className="detalles"> {props.texto}</p>
      
        </article>
    )
}

