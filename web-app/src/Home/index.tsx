import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Row, Col } from "antd";
import styles from "./index.module.scss";
import { externalEndpoint } from "../const";

const Home = () => {
  useEffect(() => {
    console.log("bitch!");
  });
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
        <img src={`${externalEndpoint}image/20`} alt="bitch" />
      </Row>
    </div>
  );
};

export default Home;
