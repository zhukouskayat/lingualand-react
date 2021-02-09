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
    <div className="schoolList">
    {
      schools.map(obj => <SchoolsItem key={obj.id} {...obj} /> )
    }
    </div>
  );
}  

export default SchoolList;
