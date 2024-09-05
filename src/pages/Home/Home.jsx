import React from "react";
// import "../../assets/styles/index.css"
import image1 from '../../assets/image/main.jpg' 


const Home = () => {
  return (
    <div className="flex justify-evenly mt-11 px-10">

      <div >
        <img src={image1} alt="nike" className="rounded-2xl"/>
      </div>

      <div className="mx-11">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Maxime voluptate dolorum iure, incidunt quos,
           obcaecati ullam vero possimus ipsa fugiat consectetur 
           dignissimos ab? Porro, quas.
        </h1>
      </div>

      
                
    </div>
  );
};

export default Home;
