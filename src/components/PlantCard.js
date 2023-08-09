import React, { useState } from "react";

function PlantCard({plant, removePlant, updatePlant}) {
  
  const [isInStock, setIsInStock] = useState(true)
  const [changePrice, setChangePrice] = useState(false)
  const [newPrice, setNewPrice] = useState(0)

  function handleDeletePlant() {
    const OPTIONS = { method: 'DELETE' }

    fetch(`http://localhost:6001/plants/${plant.id}`, OPTIONS)
    .then( r => r.json() )
    .then( () => removePlant(plant) )
  }

  function handleUpdatePrice(e) {
    e.preventDefault()

    const OPTIONS = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ price: newPrice })
    }

    fetch(`http://localhost:6001/plants/${plant.id}`, OPTIONS)
    .then( r => r.json() )
    .then( plant => updatePlant(plant) )

    setChangePrice(false)
    setNewPrice("")
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock 
        ? ( <button className="primary" onClick={ () => setIsInStock(!isInStock) }>In Stock</button> )
        : ( <button onClick={ () => setIsInStock(!isInStock) }>Out of Stock</button>)}
      <button onClick={ () => setChangePrice(!changePrice) }>Change the Price?</button>
      {changePrice && (
        <form onSubmit={ handleUpdatePrice }>
          <input type="number" name="price" step="0.01" placeholder="Price" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
          <button type="submit">Update Price</button>
        </form>
      )}
      <br></br><button onClick={ handleDeletePlant }>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
