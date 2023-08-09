import React, { useState } from "react";

function NewPlantForm({addPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmitPlant(e) {
    e.preventDefault()

    const OPTIONS = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
      })
    }

    fetch(`http://localhost:6001/plants`, OPTIONS)
    .then( r => r.json() )
    .then( newPlant => addPlant(newPlant) )

    setName("")
    setImage("")
    setPrice("")
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmitPlant }>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={e => setName(e.target.value)}m/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
