import React, { useState } from "react";
import { transform } from "typescript";
import styles from "./index.module.scss";

interface lightProp {
  north: boolean;
  northTurn: boolean;
  east: boolean;
  eastTurn: boolean;
  south: boolean;
  southTurn: boolean;
  west: boolean;
  westTurn: boolean;
  intersectionType?: string;
  orientation?: keyof typeof orientationTranslation;
}

const orientationTranslation = {
  north: "0",
  east: "90",
  south: "180",
  west: "270",
};

const TrafficPhase = (light: lightProp) => {
  const [type, setType] = useState(light.intersectionType || "normal");
  return (
    <div
      style={{
        backgroundImage: `url(/asset/traffic-phase${
          type === "normal" ? "" : "-tri"
        }.svg)`,
        width: "900px",
        height: "900px",
        transform: `rotate(${orientationTranslation[light.orientation || "north"]}deg)`,
      }}
    >
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "575px",
          marginLeft: "675px",
        }}
        src={`/asset/arrow-left-${light.east ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "510px",
          marginLeft: "675px",
        }}
        src={`/asset/arrow-${light.east ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "375px",
          marginLeft: "675px",
        }}
        src={`/asset/arrow-turn-${light.eastTurn ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "275px",
          marginLeft: "675px",
        }}
        src={`/asset/arrow-u-${light.east ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "735px",
          marginLeft: "150px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-left-${light.south ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "765px",
          marginLeft: "240px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-${light.south ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "735px",
          marginLeft: "375px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-turn-${light.southTurn ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "745px",
          marginLeft: "475px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-u-${light.southTurn ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "210px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-left-${light.west ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "335px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-${light.west ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "400px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-turn-${light.westTurn ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "525px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-u-${light.westTurn ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "65px",
          marginLeft: "535px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-left-${light.north ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "95px",
          marginLeft: "425px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-${light.north ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "65px",
          marginLeft: "325px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-turn-${light.northTurn ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "75px",
          marginLeft: "200px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-u-${light.northTurn ? "green" : "red"}.svg`}
      />
    </div>
  );
};

export default TrafficPhase;
export type { lightProp };
