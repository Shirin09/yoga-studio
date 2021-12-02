import React, { useState, useContext } from "react";
import { productsContext } from '../../../context/ProductContext'
import './AddClasses.css'

const AddClasses = () => {
  const { addClasses } = useContext(productsContext);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [artistsName, setArtistsName] = useState("");
  const [classday, setClassday] = useState("");
  const [time, setTime] = useState("");

  function handleAdd() {
    const product = {
      image,
      name,
      artistsName,
      classday,
      time,
    };
    addClasses(product);
  }

  return (
    <div class="class-wrap">
    <form action="">
        <div class="class-img">
            <input alt="Image" type="text"
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <div class="class-text">
                <input 
                type="text"
                placeholder="teachers name"
                onChange={(e) => setArtistsName (e.target.value)}
                />

            <div class="class-teacher">
            <input
            type="text"
            placeholder="class name"
            onChange={(e) => setName(e.target.value)}
            />
                <a href="">+</a>
            </div>
            
            <div class="class-meta">
                <p>
                    <i class="far fa-calendar-alt"></i>:
                <input type="text" 
                placeholder="classes day"
                onChange={(e) => setClassday(e.target.value)} /> 
                </p>

                <p>
                    <i class="far fa-clock"></i>:
                <input type="text" 
                placeholder="time"
                onChange={(e) => setTime(e.target.value)} /> 
                </p>

            </div>
            <button onClick={handleAdd}>Add</button>
            </div>
    </form>
  </div>

  );
};

export default AddClasses;