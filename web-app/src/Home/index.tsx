import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Row, Col, Button } from "antd";
import styles from "./index.module.scss";
import TrafficLight from "react-trafficlight";
import { CameraFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { externalEndpoint } from "../const";

const junctions = [
  { id: 2, name: "หัวลำโพง", lat: 13.737908, lng: 100.516311 },
  { id: 3, name: "มหานคร", lat: 13.736726, lng: 100.519133 },
  { id: 4, name: "สะพานเหลือง", lat: 13.735735, lng: 100.52161 },
  { id: 5, name: "สามย่าน", lat: 13.732783, lng: 100.528835 },
  { id: 6, name: "อังรีดูนังต์", lat: 13.730785, lng: 100.533573 },
  { id: 7, name: "ศาลาแดง", lat: 13.729602, lng: 100.53659 },
  { id: 8, name: "วิทยุ", lat: 13.726334, lng: 100.544419 },
  { id: 9, name: "ใต้ด่วนพระราม 4", lat: 13.722911, lng: 100.552615 },
  { id: 10, name: "คลองเตย", lat: 13.721106, lng: 100.557593 },
  { id: 11, name: "พระรามที่ 4", lat: 13.720242, lng: 100.559085 },
  { id: 12, name: "เกษมราษฎร์", lat: 13.718941, lng: 100.567157 },
  { id: 14, name: "กล้วยน้ำไท", lat: 13.712945, lng: 100.584065 },
  { id: 15, name: "พระโขนง", lat: 13.714308, lng: 100.592523 },
  { id: 16, name: "ณ ระนอง", lat: 13.717685, lng: 100.55818 },
  { id: 17, name: "กรมศุลกากร", lat: 13.714643, lng: 100.565236 },
  { id: 18, name: "อ่อนนุช", lat: 13.708889, lng: 100.599426 },
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
            backgroundColor: "white",
          }}
        >
          {name}
        </Row>
      </Row>
    </Link>
  );
};

const Home = () => {
  useEffect(() => {
    console.log("bitch!");
    const interval = setInterval(() => {
      console.log("update!");
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>กรุณาเลือกแยกที่ต้องการ</h1>
      </Row>
      <Row justify="center" className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAP_API || "" }}
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
    </div>
  );
};

export default Home;
