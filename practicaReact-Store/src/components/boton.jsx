export default function Boton(props) {
  return (
    <button
      id="letra"
      className={
        "p-1.5 mt-5 rounded-xl text-black bg-slate-300 hover:text-slate-300 bg-black/50 hover:bg-black/30 hover:shadow-xl hover:shadow-black" +
        " " +
        props.className
      }
    >
      {props.textoBoton}
    </button>
  );
}
