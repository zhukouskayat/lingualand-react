import React, { useEffect, useState } from "react";
import SchoolsItem from "./schoolsItem/schoolsItem";

import "./schoolsList.css";

function SchoolList () {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/schools").then((resp) => resp.json()).then(json =>{
      setSchools(json);
    }) 
  }, [])

  console.log(schools);

  return(
    <div className="schoolsList">
    {
      schools.map(schools => <SchoolsItem key={schools.id} {...schools} /> )
    }
    </div>
  );
}  

export default SchoolList;
