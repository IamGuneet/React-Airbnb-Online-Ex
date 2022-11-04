import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card"

import data from "./Data/data";

export default function App () {
return (
      <div>
        <Navbar />
        <Hero />
       <div className="cardContainer">
        {data.map((experience) => {
          return(

          <Card
            rating={experience.rating}
            url ={experience.url}
            name={experience.name}
            price={experience.price}
          />

          )
        })}
      
</div>
    </div>
  )
}
