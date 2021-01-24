import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Row, Col } from "antd";
import styles from "./index.module.scss";
import TrafficLight from "react-trafficlight";
import { externalEndpoint } from "../const";

const Home = () => {
  const [key, setKey] = useState(0)

  useEffect(() => {
    console.log("bitch!");
    const interval = setInterval(() => {
      console.log("update!")
      setKey(Date.now())
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <Row justify="center" className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
          layerTypes={["TrafficLayer"]}
        >
          {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      /> */}
        </GoogleMapReact>
      </Row>
      <Row justify="center">
        <img src={`${externalEndpoint}image/20?${key}`} alt="bitch" />
        <img src={`${externalEndpoint}image/1219?${key}`} alt="bitch2" />
      </Row>
      <Row justify="center">
        <TrafficLight RedOn={true} />
      </Row>
    </div>
  );
};

export default Home;
