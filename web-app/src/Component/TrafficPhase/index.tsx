import React, {useState} from "react";
import { transform } from "typescript";
import styles from "./index.module.scss";




const TrafficPhase = ({light}: any) => {
 

  return (
    <div
      style={{
        backgroundImage: "url(/asset/trafficPhase.svg)",
        width: "900px",
        height: "900px",
      }}
    >
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "500px",
          marginLeft: "600px",
        }}
        src={`/asset/arrow-${light.east ? "green": "red"}.svg`}
      />
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "300px",
          marginLeft: "600px",
        }}
        src={`/asset/arrow-turn-${light.eastTurn ? "green": "red"}.svg`}
      />
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "720px",
          marginLeft: "200px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-${light.south ? "green": "red"}.svg`}
      />
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "680px",
          marginLeft: "400px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-turn-${light.southTurn ? "green": "red"}.svg`}
      />
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "300px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-${light.west ? "green": "red"}.svg`}
      />
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "500px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-turn-${light.westTurn ? "green": "red"}.svg`}
      />
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "120px",
          marginLeft: "400px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-${light.north ? "green": "red"}.svg`}
      />
      <img
        style={{
          width: "300px",
          position: "absolute",
          marginTop: "80px",
          marginLeft: "200px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-turn-${light.northTurn ? "green": "red"}.svg`}
      />
    </div>
  );
};

export default TrafficPhase;
