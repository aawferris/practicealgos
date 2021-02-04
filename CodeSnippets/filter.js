import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import "./Landing.css";
function Landing(props) {
  const [apiInfo, setApiInfo] = useState([]);
  const [queriedData, setQueriedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.hatchways.io/assessment/students"
      );
      setApiInfo(response.data.students);
      setQueriedData(response.data.students);
    };
    getData();
  }, []);
  const handleSearch = (event) => {
    const searchedStudents = apiInfo.filter(
      (students) =>
        students.firstName
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        students.lastName
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );
    setQueriedData(searchedStudents);
    setSearchValue(event.target.value);
  };
  const handleSubmit = (event) => event.preventDefault();
  function getAvg(grades) {
    const parsedArray = grades.map((val) => Number(val));
    const total = parsedArray.reduce((acc, val) => acc + val, 0);
    return total / grades.length;
  }
  return (
    <div className="parent-container">
      <Search
        onSubmit={handleSubmit}
        onChange={handleSearch}
        searchValue={searchValue}
      />
      {queriedData.map((apiData, index) => (
        <div className="landing-container" key={index}>
          <div className="image-container">
            <img className="student-image" src={apiData.pic} alt="" />
          </div>
          <div className="content-container">
            <div className="name-div">
              <p>
                {apiData.firstName}&nbsp;{apiData.lastName}
              </p>
            </div>
            <div className="content-child">
              <p>Email: {apiData.email}</p>
              <p>Company: {apiData.company}</p>
              <p>Skill: {apiData.skill}</p>
              <p>Average: {getAvg(apiData.grades)}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Landing;
