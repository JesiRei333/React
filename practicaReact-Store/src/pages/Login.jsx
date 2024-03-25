import Boton from "../components/boton";
import Input from "../components/input";

export default function Login() {
  return (
    <main className="flex items-center flex-col min-h-screen p-10 gap-10 bg-slate-900 text-slate-300 text-[20px] ">
      <h1 id="titulo" className="text-[70px] font-semibold ">
        Login
      </h1>
      <div className="p-10 gap-6 bg-slate-600/50 rounded-xl flex flex-col min-w-[400px] max-w-[400px] shadow-xl shadow-black ">
        <p id="letra">Username</p>
        <Input imputType="text" />
        <p id="letra">Password</p>
        <Input imputType="password" />
        <Boton textoBoton="Login" />
      </div>
    </main>
  );
}
