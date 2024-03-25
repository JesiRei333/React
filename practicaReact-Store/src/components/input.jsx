export default function Input(props) {
  return (
    <input
      className={
        "p-1.5 rounded-xl bg-slate-300 text-slate-900 hover:shadow-xl hover:shadow-black " +
        " " +
        props.className
      }
      type={props.imputType}
    />
  );
}
