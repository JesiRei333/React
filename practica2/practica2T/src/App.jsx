import StatusOn from "./components/stremerStatusOn"
import StatusOff from "./components/streamerStatusOff"
import {games } from "./assets/constants/peliculas,"
import { features } from "./assets/constants/features"
import CardGames from "./components/cardGame"




function App() {


  return (
    <>

<main className="sm: grid grid-cols-[45px 1fr] w-max-[1200px] xl: grid-cols-[12%_88%] mx-auto h-screen w-full bg-[rgb(14_14_16)]  text-neutral-100 ">


<section className="bg-[rgb(38_38_44)] h-full w-full sm: flex flex-col items-center lg: flex-none "> {/*conectado*/}
<div className="flex flex-col "> 
{
          features.map((feature,index) =>{
            return (
              <StatusOn
              key={ `feature-${index}`}
              nameImg= {feature.nameImg}
              nameStreamer= {feature.nameStreamer}
              nameStatus= {feature.nameStatus}
              nameViewer={feature.nameViewer}
              />
            )

          })}
 </div>
<br />
<div className="flex flex-col ">
{
          features.map((feature,index) =>{
            return (
              <StatusOff
              key={ `feature-${index}`}
              nameImg= {feature.nameImg}
              nameStreamer= {feature.nameStreamer}
              nameStatus= {feature.nameStatus}
              nameViewer={feature.nameViewer}
              />
            )

          })}
          
  
</div>
</section>



<section className=" flex flex-wrap gap-[10px] p-[35px]  bg-[rgb(14_14_16)] h-full ">
       
        {
          games.map((games, index) => {
            return(
              <CardGames
              key={ `feature-${index}`}
                imgSrc={games.imgSrc}
                imgAlt={games.imgAlt}
                title={games.title}
                views={games.views}
                textoBoton= {games.textoBoton}
                />
                
            )
          })}
         

<CardGames className= " min-w-[167px] min-h-[223px]"
imgSrc={"./src/img/sss.png"} 
title= {"niño Jaiba"}
views={"Jacotomoto"}/>
</section>

</main>   
     
      
   
   
        
        
        
    </>
  )
}

export default App
