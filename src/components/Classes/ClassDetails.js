import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { productsContext } from "../../context/ProductContext";
import "./Classes.css";
import Comments from "../../components/Comments/Comments";

const ClassDetails = ({ item }) => {
  const {
    getClassDetails,
    classDetails,
    getData,
    deleteClass
    
  } = useContext(productsContext);

  let params = useParams().id;

  useEffect(() => {
    getClassDetails(params);
  }, []);

  function handleSave() {
    getData(classDetails, params);
  }
  function handleDelete() {
    deleteClass(params);
  }

  const {
    user: { email },
    admin,
  } = useAuth();
//   console.log({ email });
//   console.log(admin);

  

  return (
    <div>
      {classDetails.name ? (
        <div className="details-wrapper">
          <div className="details-container">
            <div className="content-painting-details">
              <div className="content-left">
                <img src={classDetails.image} />
              </div>
              <div className="content-right">
                <div>
                  <h1>{classDetails.artistsName}</h1>
                </div>
                <h2>{classDetails.name}</h2>
                <div>
                  <p><i className="far fa-calendar-alt"></i>
                  {" "}{classDetails.classday}
                  </p>
                </div>

                <div>
                  <span>
              <i className="far fa-clock"></i>
              {" "}{classDetails.time}
                      </span>
                </div>
                {/* <Link to="/fav">
                  <button
                    className="buy-btn"
                    onClick={() => addToFavorites(item)}
                  >
                    Add to favourites
                  </button>{" "}
                </Link> */}
                <br />
                {admin ? (
                  <>
                    <Link to="/">
                      <button onClick={handleDelete}>Delete</button>
                    </Link>
                    <Link to="/edit/:id">
                      <button onClick={handleSave}>Edit</button>
                    </Link>{" "}
                  </>
                ) : null}
              </div>
            </div>
            <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "500px",
                  }}
                >
                  <Comments productId={classDetails.id} />
                </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default ClassDetails;