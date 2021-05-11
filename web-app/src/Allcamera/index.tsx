import React, { useEffect, useState, lazy } from "react";
import LazyLoad from "react-lazyload";
import { useParams } from "react-router-dom";
import { Row, Col, List, Modal, Button } from "antd";
import styles from "./index.module.scss";
import { externalEndpoint } from "../const";

import GetLocalCameras from '../Component/LocalCameras/GetLocalCameras';

const Allcamera = () => {

  const [key, setKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(Date.now());
    }, 4000);
    return () => {
      clearInterval(interval);
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
      </Row>
      <h1>All Cameras</h1>
        <GetLocalCameras user={key} />
      <br/>
    </div>
  );
};

export default Allcamera;
