import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Singleproduct from "./singleproduct";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const nav = useNavigate()
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    const data = await response.json();
    setUserdata(data);
    // console.log(data)
  };
  const [Userdata, setUserdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  // console.log(Userdata);


  return (
    <div className="parent">
      {Userdata.map(function (elem, idx) {
        return (
          <div key={idx} >
            <div className="child">

              <img onClick={ () => {
              //  <Singleproduct /> it will ignored 
              // history('/singleproduct')
              nav(`/singleproduct/${elem.id}`);

              //  console.log(elem.id)
              }} src={elem.image} alt="" />


              <br /> <br />
              <div>
            <p>Rating : {elem.rating.rate} ,
              <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> {elem.rating.count}
               </p>
               <h3>{elem.title}</h3>
               <p className="description">{elem.description}</p>

            <p style={{color:"green" ,fontSize:"20px",marginTop:"-14px"}}>Price = {elem.price}</p>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
