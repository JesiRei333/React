export default function CardGames(props) {
    return(
        <article className="max-w-[167px]">
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <div className="grid grid-cols-[90%_10%]">
                <h3 className="text-[15px]">{props.title}</h3>
                <button>°</button>
                <p>{props.views}</p>
            </div>
        </article>
    )
}