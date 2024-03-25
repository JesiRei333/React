import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login2() {
  const [user, setUser] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.token) {
          localStorage.setItem("token", json.token);
          setUser("");
          setPasword("");
          navigate("/");
          return;
        }
        //esto se ejevuta si no hay token
        setError("Usuario o contraseña inválidos");
      })
      .catch((error) => {
        console.log("loging error", error);
      });
  }
  return (
    <main className="flex items-center flex-col min-h-screen p-10 gap-10 bg-slate-900 text-slate-300 text-[20px] ">
      <h1 id="titulo" className="text-[70px] font-semibold ">
        Login
      </h1>
      <form
        className="p-10 gap-6 bg-slate-600/50 rounded-xl flex flex-col min-w-[400px] max-w-[400px] shadow-xl shadow-black "
        onSubmit={handleSubmit}
      >
        <p id="letra">Username</p>
        <input
          className="p-1.5 rounded-xl bg-slate-300 text-slate-900 hover:shadow-xl hover:shadow-black "
          type="text"
          name="user"
          placeholder="Username ♥"
          onChange={(event) => setUser(event.target.value)}
          value={user}
          required
        />
        <p id="letra">Password</p>
        <input
          className="p-1.5 rounded-xl bg-slate-300 text-slate-900 hover:shadow-xl hover:shadow-black "
          type="password"
          name="password"
          placeholder="Password ♥"
          onChange={(event) => setPasword(event.target.value)}
          value={password}
          required
        />

        {error && (
          <p
            className=" text-base flex justify-center items-center "
            id="letra"
          >
            {"⚠ "}
            {error}
          </p>
        )}

        {/*<p id="letra">{}</p>*/}
        {/* <p className={clsx({ hidden: !error })}>{error}</p>*/}
        {/*error && (<p id="letra">{}</p>)*/}

        <button
          className="p-1.5 mt-5 rounded-xl text-black bg-slate-300 hover:text-slate-300 bg-black/50 hover:bg-black/30 hover:shadow-xl hover:shadow-black"
          type="submit"
        >
          Login
        </button>
      </form>
    </main>
  );
}
//http://localhost:5173/fake-submit?user=Jesi&password=12345
//http://localhost:5173/login2?user=s&password=s
//http://localhost:5173/login2?user=s&password=s
//token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMTEwMTc5MCwiZXhwIjoxNzExMTA1MzkwfQ.4NMbVvA_KzpHU4LyElUm6A4ZO6QQhQ6Wv63PaRaczyo
