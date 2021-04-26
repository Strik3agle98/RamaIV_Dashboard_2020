import React, { useEffect, useState } from "react";
import type {lightProp} from '../TrafficPhase'

interface lightConfig {
  light: lightProp;
  onClick: () => void;
}

const orientationTranslation = {
  north: "0",
  east: "90",
  south: "180",
  west: "270",
};

const PhaseConfig = ({light, onClick}: lightConfig) => {
  const [type, setType] = useState(light.intersectionType || "quad");
  return (
    <div
      style={{
        backgroundImage: `url(/asset/traffic-phase${
          type === "quad" ? "" : "-tri"
        }.svg)`,
        width: "900px",
        height: "900px",
        transform: `rotate(${
          orientationTranslation[light.orientation || "north"]
        }deg)`,
      }}
    >
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "575px",
          marginLeft: "675px",
        }}
        src={`/asset/arrow-left-${light.eastLeft ? "green" : "red"}.svg`}
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
        src={`/asset/arrow-turn-${light.eastRight ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "275px",
          marginLeft: "675px",
        }}
        src={`/asset/arrow-u-${light.eastU ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "735px",
          marginLeft: "150px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-left-${light.southLeft ? "green" : "red"}.svg`}
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
        src={`/asset/arrow-turn-${light.southRight ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "745px",
          marginLeft: "475px",
          transform: "rotate(90deg)",
        }}
        src={`/asset/arrow-u-${light.southU ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "210px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-left-${light.westLeft ? "green" : "red"}.svg`}
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
        src={`/asset/arrow-turn-${light.westRight ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "525px",
          marginLeft: "0",
          transform: "rotate(180deg)",
        }}
        src={`/asset/arrow-u-${light.westU ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "65px",
          marginLeft: "535px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-left-${light.northLeft ? "green" : "red"}.svg`}
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
        src={`/asset/arrow-turn-${light.northRight ? "green" : "red"}.svg`}
      />
      <img
        style={{
          width: "225px",
          position: "absolute",
          marginTop: "75px",
          marginLeft: "200px",
          transform: "rotate(-90deg)",
        }}
        src={`/asset/arrow-u-${light.northU ? "green" : "red"}.svg`}
      />
    </div>
  );
};

export default PhaseConfig;
export type { lightConfig };
