import Cards from "../components/Cards";
import { Btnwhatsapp } from "../components/Btnwhatsapp";

import styled from 'styled-components'
import homeimg from "../assets/homeimg";

const Acerca = () => {

  return (
    <Acercaux>
    <div className="acerca">
      <Btnwhatsapp/>
      <div className="wrapper">
      <Cards img={homeimg.weather}
        title="Weather-APP"
        description="App que permite ve el clima de tu ciudad!" 
        url="https://weather-p40ousxb7-josemavsg.vercel.app"/>
      <Cards img={homeimg.bikes}
        title="Search bikes"
        description="App que permite buscar bicicletas robadas!"/>
      <Cards img={homeimg.rick}
        title="Rick and Morty Chars "
        description="App que permite ver los personajes de rick and morty"
        url="https://rickandmorty-hyjn00rgb-josemavsg.vercel.app/"
          />
           <Cards img={homeimg.pokemon}
        title="Pokemon y Mapa de mapbox"
        description="Integracion de mapa de mapbox y lista de pokemon"
        url="https://prueba-manuel.vercel.app/"
          />
          </div> 
         
       
    </div>
    </Acercaux>
  );
};

const Acercaux = styled.div`
    .wrapper{
      margin-top: 100px;
    }
 
`
export default Acerca;
