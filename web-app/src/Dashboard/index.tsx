import React, { useEffect, useState, lazy } from "react";
import LazyLoad from "react-lazyload";
import { useParams } from "react-router-dom";
import { Row, Col, List, Modal } from "antd";
import styles from "./index.module.scss";
import { TrafficPhase } from "../Component";
import type { lightProp } from "../Component";
import { externalEndpoint } from "../const";
import { getJunctionAPI, getIncidentAPI } from "../api/dashboard";

interface ParamTypes {
  id: string;
}

const Incident = ({ incidents }: any) => {};

const Section1 = () => {};

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

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    getJunctionAPI(externalEndpoint)(id).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    const interval = setInterval(() => {
      setKey(Date.now());
    }, 4000);
    const intervalLong = setInterval(() => {
      getIncidentAPI().then((response) => {
        console.log(response.data);
        setIncidents(response.data);
      });
    }, 60000);
    return () => {
      clearInterval(interval);
      clearInterval(intervalLong);
    };
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
        <Col span={15}>
          <Row justify="center">
            <h3>สัญญาณไปจราจร</h3>
          </Row>
          <Row justify="center">
            <TrafficPhase {...light} />
          </Row>
        </Col>
        {data.camera.length > 0 && (
          <Col span={9}>
            <Row justify="center">
              <Row className={styles.row} justify="center">
                <h3>กล้องวงจรปิด BMA</h3>
              </Row>
              <Row className={styles.row} justify="space-around">
                {data.camera.map((cameraId) => (
                  <LazyLoad>
                    <img
                      src={`${externalEndpoint}api/image/${cameraId}?${key}`}
                      alt="id-20-intersection"
                    />
                  </LazyLoad>
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
