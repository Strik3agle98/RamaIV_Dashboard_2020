import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Row, Col, Button } from "antd";
import styles from "./index.module.scss";
import TrafficLight from "react-trafficlight";
import { CameraFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const junctions = [
  { id: 0, name: "หมอมี", lat: 13.740433, lng: 100.512273 },
  { id: 1, name: "ไมตรีจิตต์", lat: 13.738215, lng: 100.515235 },
  { id: 2, name: "หัวลำโพง", lat: 13.737908, lng: 100.516311 },
  { id: 3, name: "มหานคร", lat: 13.736726, lng: 100.519133 },
  { id: 4, name: "สะพานเหลือง", lat: 13.735735, lng: 100.52161 },
  { id: 5, name: "สามย่าน", lat: 13.732783, lng: 100.528835 },
  { id: 6, name: "อังรีดูนังต์", lat: 13.730785, lng: 100.533573 },
  { id: 7, name: "ศาลาแดง", lat: 13.729602, lng: 100.53659 },
  { id: 8, name: "วิทยุ", lat: 13.726334, lng: 100.544419 },
  { id: 9, name: "เฉลิมมหานคร", lat: 13.722911, lng: 100.552615 },
  { id: 10, name: "คลองเตย", lat: 13.721106, lng: 100.557593 },
  { id: 11, name: "พระรามที่ 4", lat: 13.720242, lng: 100.559085 },
  { id: 12, name: "เกษมราษฎร์", lat: 13.718941, lng: 100.567157 },
  { id: 13, name: "บ้านกล้วย", lat: 13.71325, lng: 100.580598 },
  { id: 14, name: "กล้วยน้ำไท", lat: 13.712945, lng: 100.584065 },
  { id: 15, name: "พระโขนง", lat: 13.714308, lng: 100.592523 },
];

interface junctionProp {
  lat: number;
  lng: number;
  id: number;
  name: string;
}

const Junction = ({ lat, lng, id, name }: junctionProp) => {
  const [popup, setPopup] = useState(false);

  return (
    <Link to={`/dashboard/${id}`}>
      <Row
        onMouseEnter={() => {
          setPopup(true);
        }}
        onMouseLeave={() => {
          setPopup(false);
        }}
        justify="center"
        align="middle"
        className={styles.mapPin}
      >
        <CameraFilled style={{ fontSize: "15px", color: "#1c1e21" }} />
        <Row
          style={{
            display: `${popup ? "block" : "none"}`,
            position: "absolute",
            top: "-20px",
            width: "100px",
            textAlign: "center",
            fontSize: "14px",
            backgroundColor: "white"
          }}
        >
          {name}
        </Row>
      </Row>
    </Link>
  );
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
          {junctions.map((junction) => (
            <Junction
              lat={junction.lat}
              lng={junction.lng}
              id={junction.id}
              name={junction.name}
            />
          ))}
          {/* <Junction lat={13.740433} lng={100.512273} id={0} />
          <Junction lat={13.737997} lng={100.515961} id={1} /> */}
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
