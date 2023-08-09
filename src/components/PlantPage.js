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

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchString={setSearchString} />
      <PlantList plants={plants} searchString={searchString} />
    </main>
  );
}

export default PlantPage;
