import React, { useContext, useEffect, useAuth } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { authContext } from "../../context/AuthContext";
import { productsContext } from "../../context/ProductContext";

import "./ClassesCard.css";

const ClassesCard = ({ item }) => {
  const {
    getData,
    getClasses,
    getClassDetails,
    classDetails,
    deleteClass
  } = useContext(productsContext);

  const params = useParams().id;

  useEffect(() => {
    getClassDetails(item.id);
  }, []);

  function handleSave() {
    getData(classDetails, item.id);
  }
  function handleDelete() {
    deleteClass(item.id);
  }

  const {
    user: { email },
    admin,
  } = useContext(authContext);
  

function addToFavorites(fav) {
  if(!JSON.parse(localStorage.getItem("favorites"))) {
    localStorage.setItem("favorites", JSON.stringify([]))
  }

  let data = JSON.parse(localStorage.getItem("favorites"));
  let filteredData = data.filter((elem)=> elem.id !== fav.id)
  filteredData.push(fav);

  localStorage.setItem("favorites", JSON.stringify(filteredData));
  getClasses()
}
  return (
    <div className="class-container">
      <div className="class-wrap" style={{width: "450px"}}>
        <div className="class-item">
          <div className="class-img">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="Image" style={{height : "300px"}}/>
          </Link>
                <div class="class-edit">
                {admin ? (
                    <>
                        <button onClick={handleDelete} className="btn-delete">
                        Delete
                        </button>
                    <Link to={`/edit/${item.id}`}>
                        <button className="btn-edit" onClick={handleSave}>
                        Edit
                        </button>
                    </Link>
                    </>
                ) : null}
                </div>
          </div>
        </div>
        <div className="class-text">
          <div className="class-teacher">
            {/* <img src={item.image} alt="Image" /> */}
            <h3>{item.artistsName}</h3>
            
            <button className="btn_fav" onClick={() => addToFavorites(item)}><i className="fa fa-heart"></i></button>
          </div>
          <h2>{item.name}</h2>
          <div className="class-meta">
            <p>
              <i className="far fa-calendar-alt"></i>{" "}
              {item.classday}
            </p>
            <p>
            <i className="far fa-clock"></i>
              {item.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
