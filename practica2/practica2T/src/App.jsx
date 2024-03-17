import StatusOn from "./components/stremerStatusOn"
import StatusOff from "./components/streamerStatusOff"
import {games } from "./assets/constants/peliculas,"
import { features } from "./assets/constants/features"
import CardGames from "./components/cardGame"


function App() {


  return (
    <>

<main className="sm: grid grid-cols-[45px 1fr] w-max-[1200px] xl: grid-cols-[13%_87%] mx-auto h-screen w-full bg-[rgb(14_14_16)]  text-neutral-100 ">


<section className="bg-[rgb(38_38_44)] h-full w-full" > {/*conectado*/}
<div> 
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

<div>
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
              />
            )
          })}



</section>

</main>   
     
      
   
   
        
        
        
    </>
  )
}

export default App
