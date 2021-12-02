import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../../context/ProductContext";
import { useParams } from "react-router";

const EditClasses = () => {
    
      const { data, editClassDetails, classDetails } = useContext(productsContext);
    const id = useParams().id
    // console.log(id)
    console.log(data)
    
      const [image, setImage] = useState(data.image);
      const [name, setName] = useState(data.name);
      const [artistsName, setArtistsName] = useState(data.artistsName);
      const [classday, setClassday] = useState(data.classday);
      const [time, setTime] = useState(data.time);

      function handleEdit() {
        const editedProduct = {
          image: image,
          name: name,
          artistsName: artistsName,
          classday: classday,
          time: time,
        };
        editClassDetails(editedProduct);
      }
    
      return (
        <div className="edit-details">
          {data.name ? (<form action="">
            <input
              type="text"
              value={image}
              placeholder="image"
              onChange={(e) => setImage(e.target.value)}
            /><br/>
            <input
              type="text"
              value={name}
              placeholder="class name"
              onChange={(e) => setName(e.target.value)}
            /><br/>
            <input
              type="text"
              value={artistsName}
              placeholder="teachers name"
              onChange={(e) => setArtistsName(e.target.value)}
            /><br/>
            <input
              type="text"
              placeholder="classday"
              value={classday}
              onChange={(e) => setClassday(e.target.value)}
            /><br/>
            <input
              type="text"
              placeholder="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            /><br/>
            <Link to={`/odmen`}>
              <button onClick={handleEdit}>save</button><br/>
            </Link>
          </form>) : null}
        </div>
      );
    };
    
    

export default EditClasses;