import React, { useEffect, useState, lazy } from "react";
import LazyLoad from "react-lazyload";
import { useParams } from "react-router-dom";
import { Row, Col, List, Modal } from "antd";
import styles from "./index.module.scss";
import { TrafficPhase } from "../Component";
import type { lightProp } from "../Component";
import { externalEndpoint } from "../const";
import { getJunctionAPI, getIncidentAPI } from "../api/dashboard";
import GoogleMapReact from "google-map-react";

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
    <List
      itemLayout="horizontal"
      dataSource={incidents}
      renderItem={(incident) => (
        <List.Item>
          <List.Item.Meta
            title={<h3>{incident.title}</h3>}
            description={<p>{incident.description}</p>}
          />
        </List.Item>
      )}
    />
  );
};

type Section1Props = {
  lat?: number;
  lng?: number;
};

const Section1 = ({ lat, lng }: Section1Props) => {
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
      </Row>
    </div>
  );
};

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
        <p>ข้อมูลเวลาจริง</p>
      </Row>
      <Section1 lat={data.lat} lng={data.lng} />

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
