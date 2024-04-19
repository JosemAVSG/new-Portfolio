import Cards from "../components/Cards";
import { Btnwhatsapp } from "../components/Btnwhatsapp";

import styled from "styled-components";
import homeimg from "../assets/homeimg";

const Acerca = () => {
  return (
    <Acercaux>
      <div className="acerca">
        <Btnwhatsapp />
        <div className="wrapper">
          <Cards
            img={homeimg.pokemon}
            title="Pokemon y Mapa de mapbox"
            description="Integracion de mapa de mapbox y lista de pokemon"
            url="https://prueba-manuel.vercel.app/"
            git="https://github.com/JosemAVSG/Prueba_manuel"
            tech={["React","Sass", "HTML","CSS"]}
          />
          <Cards
            img={homeimg.inventario}
            title="Sistema de inventario"
            description="Proyecto Full Stack, Back: express, Front: React"
            url="https://sistema-de-inventario-client.vercel.app/"
            git="https://github.com/JosemAVSG/Sistema-de-inventario-Client"
            tech={["React", "Tailwind", "HTML","CSS","Mongo"]}
          />
             <Cards
            img={homeimg.p2henry}
            title="Movie APP"
            description="Proyecto Full Stack, Bootcamp Soy Henry #2"
            url="https://peppy-mooncake-dcfe44.netlify.app/"
            git="https://github.com/JosemAVSG/P2-henrybootcamp"
            tech={["Boostrap", "HTML","CSS","JavaScript","Mongo"]}
          />
            <Cards
            img={homeimg.weather}
            title="Weather-APP"
            description="App que permite ve el clima de tu ciudad!"
            url="https://weather-p40ousxb7-josemavsg.vercel.app"
            git="https://github.com/JosemAVSG/weather-app"
            tech={["React","JavaScript", "HTML","CSS"]}
          />
          <Cards
            img={homeimg.bikes}
            title="Search bikes"
            description="App que permite buscar bicicletas robadas!"
            url="https://coding-challenge-frontend-react-6dcyxqexh-josemavsg.vercel.app/"
            git="https://github.com/JosemAVSG/coding-challenge-frontend-react"
            tech={["React", "JavaScript", "HTML","CSS"]}
          />
          <Cards
            img={homeimg.rick}
            title="Rick and Morty Chars "
            description="App que permite ver los personajes de rick and morty"
            url="https://rickandmorty-hyjn00rgb-josemavsg.vercel.app/"
            git="https://github.com/JosemAVSG/rickandmorty"
            tech={["React", "StyleComponents", "HTML","CSS"]}
          />
        </div>
      </div>
    </Acercaux>
  );
};

const Acercaux = styled.div`
  .wrapper { 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 1024px) {

  .wrapper{
    grid-template-columns: repeat(2,1fr);
  }
}
@media screen and (max-width: 650px) {

  .wrapper{
    grid-template-columns: repeat(1,1fr);
  }
}
`;
export default Acerca;
