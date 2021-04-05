import React, { useEffect, useState, lazy } from "react";
import LazyLoad from "react-lazyload";
import { useParams } from "react-router-dom";
import { Row, Col, List, Modal, Button } from "antd";
import styles from "./index.module.scss";
import { TrafficPhase } from "../Component";
import type { lightProp } from "../Component";
import { externalEndpoint } from "../const";
import { getJunctionAPI, getIncidentAPI } from "../api/dashboard";
import GoogleMapReact from "google-map-react";
import { ResponsiveLine } from "@nivo/line";

interface ParamTypes {
  id: string;
}

interface incidentType {
  description?: string;
  contributor?: string;
  description_en?: string;
  eid?: string;
  icon?: string;
  images?: Array<String>;
  latitude?: String;
  longitude?: String;
  severity?: String;
  showlevel?: number;
  start?: string;
  stop?: string;
  title?: string;
  title_en?: string;
  type?: string;
}

type IncidentProps = {
  incidents: Array<incidentType>;
};

const Incident = ({ incidents }: IncidentProps) => {
  return (
    <div className={styles.listContainer}>
      <List
        itemLayout="horizontal"
        dataSource={incidents.slice(0, 4)}
        renderItem={(incident) => (
          <List.Item>
            <List.Item.Meta
              title={<h3>{incident.title}</h3>}
              description={
                <p className={styles.listDescription}>{incident.description}</p>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

type Section1Props = {
  lat?: number;
  lng?: number;
  camera?: Array<Number>;
};

const Section1 = ({ lat, lng, camera }: Section1Props) => {
  const [key, setKey] = useState(0);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    getIncidentAPI().then((response) => {
      console.log(response.data);
      setIncidents(response.data);
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
    <div className={styles.row}>
      <Row justify="space-around">
        <Col span={10}>
          <Row justify="center" className={`${styles.map}`}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.MAP_API || "" }}
              defaultCenter={{
                lat: lat || 13.732931,
                lng: lng || 100.528818,
              }}
              defaultZoom={15}
              layerTypes={["TrafficLayer"]}
            />
          </Row>
          <div>
            <Incident incidents={incidents} />
          </div>
        </Col>
        {camera && camera.length > 0 && (
          <Col span={9}>
            <Row justify="center">
              <Row className={styles.row} justify="center">
                <h3>กล้องวงจรปิด BMA</h3>
              </Row>
              <Row className={styles.row} justify="space-around">
                {camera.map((cameraId) => (
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

const Section2 = () => {
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
  return (
    <div>
      <Row justify="center">
        <h3>สัญญาณไปจราจร</h3>
      </Row>
      <Row justify="center">
        <TrafficPhase {...light} />
      </Row>
    </div>
  );
};

const Dashboard = () => {
  const { id } = useParams<ParamTypes>();
  const [key, setKey] = useState(0);
  const [section, setSection] = useState(0);
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
    getJunctionAPI(externalEndpoint)(id).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
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
        <Button
          onClick={() => {
            setSection(0);
          }}
          type={section === 0 ? "primary" : "default"}
        >
          หน้าที่ 1
        </Button>
        <Button
          onClick={() => {
            setSection(1);
          }}
          type={section === 1 ? "primary" : "default"}
        >
          หน้าที่ 2
        </Button>
      </Row>
      {section === 0 ? (
        <Section1 lat={data.lat} lng={data.lng} camera={data.camera} />
      ) : (
        <Section2 />
      )}


      {/* <Row className={styles.row} justify="space-around">
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
      </Row> */}
    </div>
  );
};

export default Dashboard;
