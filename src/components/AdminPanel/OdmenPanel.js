import React from "react";
import { Link } from "react-router-dom";
import Classes from "../Classes/Classes";
import './AddClasses/AddClasses.css'

const OdmenPanel = () => {
  return (
    <div>
      <Link to="add">
          <div className="odmen-add-btn">
        <button className="add-btn">Add Class</button>
          </div>
      </Link>
      <Classes/>
    </div>
  );
};

export default OdmenPanel;
