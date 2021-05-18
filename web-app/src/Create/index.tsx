import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { Row, Col, Select, InputNumber, Input } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import type { lightProp, orientations, light } from "../Component";
import { PhaseConfig } from "../Component";

const { Option } = Select;
const intersectionTemplates = ["quad", "tri", "phraKanong"];

const Orientations = ["north", "east", "south", "west"];

const initialLight = {
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
};

interface ParamTypes {
  id: string;
}

interface junctionType {
  name: string;
  lat: number;
  lng: number;
  camera: Array<number>;
  intersectionType: string;
  orientation: orientations;
  light: { [key: number]: light };
}

const Config = () => {
  const { id } = useParams<ParamTypes>();
  const [phase, setPhase] = useState(1);
  const [junction, setjunction] = useState<junctionType>({
    name: "",
    lat: 0,
    lng: 0,
    camera: [],
    intersectionType: "quad",
    orientation: "north",
    light: {},
  });
  //0: red, 1: green, 2: none

  const handleClick = (key: keyof light) => {
    if (!junction.light[phase]) {
      setjunction({
        ...junction,
        light: { ...junction.light, [phase]: { ...initialLight, [key]: 1 } },
      });
    } else {
      let state = junction.light[phase][key] || 0;
      if (state < 1) {
        setjunction({
          ...junction,
          light: {
            ...junction.light,
            [phase]: { ...junction.light[phase], [key]: state + 1 },
          },
        });
      } else {
        setjunction({
          ...junction,
          light: {
            ...junction.light,
            [phase]: { ...junction.light[phase], [key]: 0 },
          },
        });
      }
    }
  };

  useEffect(() => {
    console.log(junction);
  });

  return (
    <div className={styles.container}>
      <Row className={styles.subContainer} justify="center">
        <h3>Intersection Name</h3>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <Col span={12}>
          <Input
            style={{ width: "100%" }}
            size="large"
            value={junction.name}
            onChange={(e) => {
              setjunction({ ...junction, name: e.target.value });
            }}
          />
        </Col>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <h3>Intersection Coordinate</h3>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <Col span={6}>
          <h4>Latitude</h4>
          <InputNumber
            style={{ width: "100%" }}
            size="large"
            onChange={(value) => {
              if (value && typeof value === "number") {
                setjunction({ ...junction, lat: value });
              }
            }}
          />
        </Col>
        <Col span={6}>
          <h4>Longtitude</h4>
          <InputNumber
            style={{ width: "100%" }}
            size="large"
            onChange={(value) => {
              if (value && typeof value === "number") {
                setjunction({ ...junction, lng: value });
              }
            }}
          />
        </Col>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <h3>Intersection BMA Camera</h3>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <Col span={12}>
          <Select
            style={{ width: "100%" }}
            mode="tags"
            value={junction.camera}
            placeholder="camera ID"
            onChange={(value) => {
              setjunction({ ...junction, camera: value });
            }}
          />
        </Col>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <h3>Intersection Template</h3>
      </Row>
      <Row className={styles.subContainer} justify="center">
        <Col span={12}>
          <Select
            style={{ width: "100%" }}
            size="large"
            value={junction.intersectionType}
            onChange={(value) => {
              setjunction({ ...junction, intersectionType: value });
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
      {junction.intersectionType === "tri" && (
        <Row className={styles.subContainer} justify="center">
          <Col span={12}>
            <Select
              style={{ width: "100%" }}
              size="large"
              value={junction.orientation}
              onChange={(value: orientations) => {
                setjunction({ ...junction, orientation: value });
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
          light={{
            north: junction.light[phase]?.north || 0,
            northRight: junction.light[phase]?.northRight || 0,
            northLeft: junction.light[phase]?.northLeft || 0,
            northU: junction.light[phase]?.northU || 0,
            east: junction.light[phase]?.east || 0,
            eastLeft: junction.light[phase]?.eastLeft || 0,
            eastRight: junction.light[phase]?.eastRight || 0,
            eastU: junction.light[phase]?.eastU || 0,
            south: junction.light[phase]?.south || 0,
            southLeft: junction.light[phase]?.southLeft || 0,
            southRight: junction.light[phase]?.southRight || 0,
            southU: junction.light[phase]?.southU || 0,
            west: junction.light[phase]?.west || 0,
            westLeft: junction.light[phase]?.westLeft || 0,
            westRight: junction.light[phase]?.westRight || 0,
            westU: junction.light[phase]?.westU || 0,
          }}
          intersectionType="quad"
          orientation="north"
          onClick={handleClick}
        />
      </Row>
    </div>
  );
};

export default Config;
