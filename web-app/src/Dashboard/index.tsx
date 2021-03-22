import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
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
    intersectionType: "normal",
    orientation: "north",
  });

  useEffect(() => {
    console.log("bitch!");
    getJunctionAPI(externalEndpoint)(id).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    const interval = setInterval(() => {
      console.log("update!");
      setKey(Date.now());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Row
        className={styles.row}
        style={{ height: "50px" }}
        justify="center"
        align="middle"
      >
        <h2>{`แยก${data.name}`}</h2>
      </Row>
      <Row className={styles.row} justify="center" align="middle">
        <p>ข้อมูลเวลาจริง</p>
      </Row>

      <Row className={styles.row} justify="space-around">
        <Col span={12}>
          <Row justify="center">
            <h3>สัญญาณไปจราจร</h3>
          </Row>
          <Row justify="center">
            <TrafficPhase {...light} />
          </Row>
        </Col>
        {data.camera.length > 0 && (
          <Col span={12}>
            <Row justify="center">
              <Row className={styles.row} justify="center">
                <h3>กล้องวงจรปิด BMA</h3>
              </Row>
              <Row className={styles.row} justify="space-around">
                {data.camera.map((cameraId) => (
                  <img
                    src={`${externalEndpoint}api/image/${cameraId}?${key}`}
                    alt="id-20-intersection"
                  />
                ))}
              </Row>
            </Row>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Dashboard;
