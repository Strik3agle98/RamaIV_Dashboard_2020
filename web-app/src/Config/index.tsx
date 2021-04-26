import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Row, Col, Select, InputNumber } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import type { lightProp, lightConfig } from "../Component";
import { PhaseConfig } from "../Component";

const { Option } = Select;
const intersectionTemplates = ["quad", "tri", "phraKanong"];

const orientations = ["north", "east", "south", "west"];

const Config = () => {
  const [template, setTemplate] = useState("quad");
  const [phase, setPhase] = useState(1);
  const [orientation, setOrientation] = useState("north");
  const [light, setLight] = useState<lightProp>({
    north: false,
    northRight: true,
    northLeft: false,
    northU: false,
    east: false,
    eastLeft: false,
    eastRight: false,
    eastU: false,
    south: false,
    southLeft: false,
    southRight: false,
    southU: false,
    west: false,
    westLeft: false,
    westRight: false,
    westU: false,
    intersectionType: "quad",
    orientation: "north",
  });
  return (
    <div className={styles.container}>
      <Row className={styles.subContainer} justify="center">
        <h2>Intersection Template</h2>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <Col span={12}>
          <Select
            style={{ width: "100%" }}
            size="large"
            value={template}
            onChange={(value) => {
              setTemplate(value);
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
      {template === "tri" && (
        <Row className={styles.subContainer} justify="center">
          <Col span={12}>
            <Select
              style={{ width: "100%" }}
              size="large"
              value={orientation}
              onChange={(value) => {
                setOrientation(value);
              }}
            >
              {orientations.map((orientation) => (
                <Option value={orientation}>{orientation}</Option>
              ))}
            </Select>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Config;
