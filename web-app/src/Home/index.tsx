import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Row, Col, Button } from "antd";
import styles from "./index.module.scss";
import TrafficLight from "react-trafficlight";
import { externalEndpoint } from "../const";
import { TrafficPhase } from "../Component";

interface junctionProp {
  lat: number;
  lng: number;
}

const Junction = ({ lat, lng }: junctionProp) => {
  return <div className={styles.mapPin}>Z</div>;
};

const Home = () => {
  const [key, setKey] = useState(0);
  const [light, setLight] = useState({
    north: false,
    northTurn: false,
    east: false,
    eastTurn: false,
    south: false,
    southTurn: false,
    west: false,
    westTurn: false,
  });

  const handleLight = (pos: keyof typeof light) => () => {
    setLight({
      ...light,
      [pos]: !light[pos],
    });
  };

  useEffect(() => {
    console.log("bitch!");
    const interval = setInterval(() => {
      console.log("update!");
      setKey(Date.now());
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <Row justify="center" className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 13.732931,
            lng: 100.528818,
          }}
          defaultZoom={15}
          layerTypes={["TrafficLayer"]}
        >
          <Junction lat={13.732931} lng={100.528818} />
          <Junction lat={13.732931} lng={100.538918} />
          {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      /> */}
        </GoogleMapReact>
      </Row>
      <Button onClick={handleLight("north")}>ToggleNorth</Button>
      <Button onClick={handleLight("northTurn")}>ToggleNorthTurn</Button>
      <Button onClick={handleLight("east")}>ToggleEast</Button>
      <Button onClick={handleLight("eastTurn")}>ToggleEastTurn</Button>
      <Button onClick={handleLight("south")}>ToggleSouth</Button>
      <Button onClick={handleLight("southTurn")}>ToggleSouthTurn</Button>
      <Button onClick={handleLight("west")}>ToggleWest</Button>
      <Button onClick={handleLight("westTurn")}>ToggleWestTurn</Button>
      <Row justify="center">
        {/* <TrafficPhase light={light} /> */}
        {/* <img src={`${externalEndpoint}image/20?${key}`} alt="bitch" />
        <img src={`${externalEndpoint}image/1219?${key}`} alt="bitch2" /> */}
      </Row>
      <Row justify="center">
        <TrafficLight RedOn={true} />
      </Row>
    </div>
  );
};

export default Home;
