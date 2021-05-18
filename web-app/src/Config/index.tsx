import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { Row, Col, Select, InputNumber } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import type { lightProp, orientations, light } from "../Component";
import { PhaseConfig } from "../Component";

const { Option } = Select;
const intersectionTemplates = ["quad", "tri", "phraKanong"];

const Orientations = ["north", "east", "south", "west"];

interface ParamTypes {
  id: string;
}

const Config = () => {
  const { id } = useParams<ParamTypes>();
  const [phase, setPhase] = useState(1);
  const [junction, setjunction] = useState({});
  const [light, setLight] = useState<light>({
    north: 0,
    northRight: 0,
    northLeft: 0,
    northU: 0,
    east: 0,
    eastLeft: 0,
    eastRight: 0,
    eastU: 0,
    south: 0,
    southLeft: 0,
    southRight: 0,
    southU: 0,
    west: 0,
    westLeft: 0,
    westRight: 0,
    westU: 0,
  });

  const handleClick = (key: keyof typeof light) => {
    console.log(key);
    setLight({ ...light, [key]: !light[key] });
  };

  return (
    <div className={styles.container}>
      {/* <Row className={styles.subContainer} justify="center">
        <h2>Intersection Template</h2>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <Col span={12}>
          <Select
            style={{ width: "100%" }}
            size="large"
            value={light.intersectionType}
            onChange={(value) => {
              setLight({
                ...light,
                intersectionType: value,
              });
            }}
          >
            {intersectionTemplates.map((template) => (
              <Option value={template}>{template}</Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <Col span={12}>
          <InputNumber
            style={{ width: "100%" }}
            size="large"
            defaultValue={1}
            onChange={(value) => {
              if (value && typeof value === "number") {
                setPhase(value);
              }
            }}
          />
        </Col>
      </Row>
      {light.intersectionType === "tri" && (
        <Row className={styles.subContainer} justify="center">
          <Col span={12}>
            <Select
              style={{ width: "100%" }}
              size="large"
              value={light.orientation}
              onChange={(value: orientations) => {
                setLight({
                  ...light,
                  orientation: value,
                });
              }}
            >
              {Orientations.map((orientation) => (
                <Option value={orientation}>{orientation}</Option>
              ))}
            </Select>
          </Col>
        </Row>
      )}
      <Row className={styles.subContainer} justify="center">
        <PhaseConfig
          light={light}
          intersectionType="quad"
          orientation="north"
          onClick={handleClick}
        />
      </Row> */}
    </div>
  );
};

export default Config;
