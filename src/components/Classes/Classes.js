import React, { useState, useEffect, useContext } from "react";
import "./Classes.css";
import { productsContext } from "../../context/ProductContext";
import ReactPaginate from "react-paginate";
import ClassesCard from "../ClassesCard/ClassesCard";
import { useParams } from "react-router";

const Classes = () => {
  const { getClasses, classes } = useContext(productsContext);

  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(classes.length / 3);

  let params = useParams();

  useEffect(() => {
    getClasses(params);
    console.log(params);
    setCls(classes);
  }, [params]);

  function changePage({ selected }) {
    setPage(selected);
  }
  const productsPerPage = 3;

  const pageVisited = page * productsPerPage;

  const [cls, setCls] = useState(classes);

  
  useEffect(() => {
    setCls(classes);
  }, [classes]);

  function getClassesCategory(class1) {
    if (class1 === "all") {
      return setCls(classes);
    }
    console.log(class1);
    let classes2 = classes.filter((elem) => elem.name == class1);
    setCls(classes2);
    // console.log(classes2);
  }

  const displayProducts = cls
    .slice(pageVisited, pageVisited + productsPerPage)
    .map((item) => <ClassesCard key={item.id} item={item} />);

  return (
    <div className="containerr">
      <div className="class">
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>Our Classes</p>
          <h2>Yoga Class Shedule</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <ul id="class-filter">
              <li
                data-filter="*"
                className="filter-active"
                onClick={() => getClassesCategory("all")}
              >
                All Classes
              </li>
              <li
                data-filter=".filter-1"
                onClick={() => getClassesCategory("pilates")}
              >
                Pilates Yoga
              </li>
              <li
                data-filter=".filter-2"
                onClick={() => getClassesCategory("hatha yoga")}
              >
                Hatha Yoga
              </li>
              <li
                data-filter=".filter-3"
                onClick={() => getClassesCategory("vinyasa")}
              >
                Vinyasa yoga
              </li>
            </ul>
          </div>
        </div>
        <div className="row class-container">
          <div
            className="col-lg-4 col-md-6 col-sm-12 class-item filter-3 wow fadeInUp"
            data-wow-delay="0.4s"
            style={{ display: "flex", width: "100%" }}
          >
            {displayProducts}
          </div>
        </div>

        <div className="paginate">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default Classes;
