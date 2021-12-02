import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductContext";
import ClassesCard from "../ClassesCard/ClassesCard";
import "./Favourites.css";


const Favorites = () => {
  const { favorites , getFavorites} = useContext(productsContext);
  const [inFavorites, setInFavorites]  = useState(true);

  useEffect(() => {
    getFavorites();
    // console.log(cart);
  }, []);


  return (
    <center>
      <div className="class-container">
        <div className="fav-item">
        { favorites ?
           favorites.map((item) => (
            <ClassesCard item={item} key ={item.id} inFavorites={inFavorites}/>
          )) :
          null
        }
        </div>
      </div>
      <div className="no-fav">
        {favorites ? null : <h2>no items in favorites</h2>}
      </div>
    </center>
  );
};

export default Favorites;


