import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'
import Botones from './components/Botones'
function App() {

  const info ={
   
     Uno: {
      icono: "💡",
      titulo:"Instant Server Start",
      texto:"On demand file serving over native ESM, no bundling required!"
     } ,
     Dos: {
      icono: "⚡️",
      titulo:"Lightning Fast HMR",
      texto:"Hot Module Replacement (HMR) that stays fast regardless of app size."
     } ,
    Tres: {
      icono: "🛠️",
      titulo:"Rich Features",
      texto:"Out-of-the-box support for TypeScript, JSX, CSS and more"
     } ,
     Cuatro: {
      icono: "📦",
      titulo:"Optimized Build",
      texto:"Pre-configured Rollup build with multi-page and library mode support."
     } ,
     Cinco: {
      icono: "🔩",
      titulo:"Instant Server Start",
      texto:"Rollup-superset plugin interface shared between dev and build."
     } ,
     Seis: {
      icono: "🔑",
      titulo:"Fully Typed APIs",
      texto:"Flexible programmatic APIs with full TypeScript typing."
     } 
}

  return (
    <>
<div className='cards_container'>
<div className='granContenedor'>
<h1>
  <span>
  Vite
  </span>
  <br />
Next Generation <br /> Frontend Tooling</h1>

<p>Get ready for a development environment that
  <br /> can finally catch up with you.</p>

  <Botones textoBoton= "Gett Start"/>
  <Botones textoBoton= "Why Vite"/>
  <Botones textoBoton= "View on GitHub"/>
  <Botones textoBoton= "🎉ViteConf 23!"/>

</div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      
     <Card icono= {info.Uno.icono} titulo= {info.Uno.titulo}  texto={info.Uno.texto} />
     <Card icono= {info.Dos.icono} titulo= {info.Dos.titulo}  texto={info.Dos.texto} />
     <Card icono= {info.Tres.icono} titulo= {info.Tres.titulo}  texto={info.Tres.texto} />
     <Card icono= {info.Cuatro.icono} titulo= {info.Cuatro.titulo}  texto={info.Cuatro.texto} />
     <Card icono= {info.Cinco.icono} titulo= {info.Cinco.titulo}  texto={info.Cinco.texto} />
     <Card icono= {info.Seis.icono} titulo= {info.Seis.titulo}  texto={info.Seis.texto} />
  
</div>
      
    </>
  )
}

export default App
