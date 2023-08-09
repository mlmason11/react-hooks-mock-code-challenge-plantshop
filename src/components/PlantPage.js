import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants, setPlants] = useState([])
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then( r => r.json() )
    .then( plants => setPlants(plants) )
  }, [])
  
  function addPlant( newPlant ) {
    setPlants([...plants, newPlant])
  }

  function removePlant( removedPlant ) {
    const updatedPlants = plants.filter(plant => plant.id !== removedPlant.id)
    setPlants(updatedPlants)
  }

  function updatePlant( updatedPlant ) {
    const newPlants = plants.map(plant => plant.id === updatedPlant.id ? updatedPlant : plant)
    setPlants(newPlants)
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchString={setSearchString} />
      <PlantList plants={plants} setPlants={setPlants} searchString={searchString} removePlant={removePlant} updatePlant={updatePlant} />
    </main>
  );
}

export default PlantPage;
