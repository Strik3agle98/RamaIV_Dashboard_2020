import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "antd";
import styles from "./index.module.scss";
import { TrafficPhase } from "../Component";
import type { lightProp } from "../Component";

interface ParamTypes {
  id: string;
}

const Dashboard = () => {
  const { id } = useParams<ParamTypes>();

  const [light, setLight] = useState<lightProp>({
    north: false,
    northTurn: false,
    east: false,
    eastTurn: false,
    south: false,
    southTurn: false,
    west: false,
    westTurn: false,
  });

  return (
    <div className={styles.container}>
      <Row className={styles.row} justify="center">
        {id}
      </Row>
      <Row className={styles.row} justify="center">
        <TrafficPhase {...light} />
      </Row>
    </div>
  );
};

export default Dashboard;
