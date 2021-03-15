import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "antd";
import styles from "./index.module.scss";
import { TrafficPhase } from "../Component";
import type { lightProp } from "../Component";
import { externalEndpoint } from "../const";
import { getJunctionAPI } from "../api/dashboard";

interface ParamTypes {
  id: string;
}

const Dashboard = () => {
  const { id } = useParams<ParamTypes>();
  const [key, setKey] = useState(0);
  const [data, setData] = useState({
    id: undefined,
    name: "",
    lat: undefined,
    lng: undefined,
    camera: [],
  });

  const [light, setLight] = useState<lightProp>({
    north: false,
    northTurn: true,
    east: false,
    eastTurn: false,
    south: false,
    southTurn: false,
    west: false,
    westTurn: false,
  });

  useEffect(() => {
    console.log("bitch!");
    getJunctionAPI(externalEndpoint)(id).then((response) => {
      setData(response.data);
      console.log(response.data)
    });
    const interval = setInterval(() => {
      console.log("update!");
      setKey(Date.now());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Row className={styles.row} justify="center">
        {data.name}
      </Row>
      <Row className={styles.row} justify="center">
        <TrafficPhase {...light} />
      </Row>
      <Row justify="center">
        {data.camera.map(cameraId => (<img
          src={`${externalEndpoint}api/image/${cameraId}?${key}`}
          alt="id-20-intersection"
        />))}
      </Row>
    </div>
  );
};

export default Dashboard;
