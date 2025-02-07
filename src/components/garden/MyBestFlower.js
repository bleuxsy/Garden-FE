import React from "react";
import "../../styles/MyBestFlower.css";
import leafIcon from "../../assets/icons/완성꽃.png";

const MyBestFlower = ({ flowerAnalysis }) => {
 
  if (!flowerAnalysis || flowerAnalysis.length === 0) {
    return (
      <div className="mybestflower" style={{ width: "100%" }}>
        <h2>많이 심은 꽃</h2>
        <p className="no-flowers">심은 꽃이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="mybestflower" style={{ width: "100%" }}>
      <h2>많이 심은 꽃</h2>
      
        {flowerAnalysis.map((flower, index) => (
          <div key={index} className="flower-content">
            <div className="flower-image-container">
             
              <img
                src={require(`../../assets/flowers/${flower.name}.png`)}
                alt={flower.name}
                className="flower-image"
              />
            </div>
            <div className="flower-info">
              <p className="flower-name">{flower.name}의</p>
              <p className="flower-meaning">"{flower.floriography}"</p>
              <div className="flower-count">
                <img src={leafIcon} alt="Leaf Icon" className="leaf-icon" />
                <span>{flower.bloomedCount}회</span> 
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default MyBestFlower;
