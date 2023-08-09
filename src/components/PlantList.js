import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchString}) {

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()))

  return (
    <ul className="cards">
      {filteredPlants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
    </ul>
  );
}

export default PlantList;
