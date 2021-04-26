import React, { Fragment, useEffect, useState } from "react";
import type { lightProp } from "../TrafficPhase";
import styles from "./index.module.scss";

interface lightConfig {
  light: lightProp;
  onClick: (key: keyof lightProp) => void;
}

const orientationTranslation = {
  north: "0",
  east: "90",
  south: "180",
  west: "270",
};

const PhaseConfig = ({ light, onClick }: lightConfig) => {
  return (
    <div
      style={{
        backgroundImage: `url(/asset/traffic-phase${
          light.intersectionType === "quad" ? "" : `-tri-${light.orientation}`
        }.svg)`,
        width: "900px",
        height: "900px",
      }}
    >
      {!(light.intersectionType === "tri" && light.orientation === "west") && (
        <Fragment>
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("eastLeft");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "575px",
              marginLeft: "675px",
            }}
            src={`/asset/arrow-left-${light.eastLeft ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("east");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "510px",
              marginLeft: "675px",
            }}
            src={`/asset/arrow-${light.east ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("eastRight");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "375px",
              marginLeft: "675px",
            }}
            src={`/asset/arrow-turn-${light.eastRight ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("eastU");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "275px",
              marginLeft: "675px",
            }}
            src={`/asset/arrow-u-${light.eastU ? "green" : "red"}.svg`}
          />
        </Fragment>
      )}
      {!(light.intersectionType === "tri" && light.orientation === "north") && (
        <Fragment>
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("southLeft");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "735px",
              marginLeft: "170px",
              transform: "rotate(90deg)",
            }}
            src={`/asset/arrow-left-${light.southLeft ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("south");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "765px",
              marginLeft: "270px",
              transform: "rotate(90deg)",
            }}
            src={`/asset/arrow-${light.south ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("southRight");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "735px",
              marginLeft: "375px",
              transform: "rotate(90deg)",
            }}
            src={`/asset/arrow-turn-${light.southRight ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("southU");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "745px",
              marginLeft: "475px",
              transform: "rotate(90deg)",
            }}
            src={`/asset/arrow-u-${light.southU ? "green" : "red"}.svg`}
          />
        </Fragment>
      )}
      {!(light.intersectionType === "tri" && light.orientation === "east") && (
        <Fragment>
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("westLeft");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "210px",
              marginLeft: "0",
              transform: "rotate(180deg)",
            }}
            src={`/asset/arrow-left-${light.westLeft ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("west");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "335px",
              marginLeft: "0",
              transform: "rotate(180deg)",
            }}
            src={`/asset/arrow-${light.west ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("westRight");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "400px",
              marginLeft: "0",
              transform: "rotate(180deg)",
            }}
            src={`/asset/arrow-turn-${light.westRight ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("westU");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "525px",
              marginLeft: "0",
              transform: "rotate(180deg)",
            }}
            src={`/asset/arrow-u-${light.westU ? "green" : "red"}.svg`}
          />
        </Fragment>
      )}
      {!(light.intersectionType === "tri" && light.orientation === "south") && (
        <Fragment>
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("northLeft");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "65px",
              marginLeft: "510px",
              transform: "rotate(-90deg)",
            }}
            src={`/asset/arrow-left-${light.northLeft ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("north");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "95px",
              marginLeft: "410px",
              transform: "rotate(-90deg)",
            }}
            src={`/asset/arrow-${light.north ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("northRight");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "65px",
              marginLeft: "310px",
              transform: "rotate(-90deg)",
            }}
            src={`/asset/arrow-turn-${light.northRight ? "green" : "red"}.svg`}
          />
          <img
            className={styles.arrow}
            onClick={() => {
              onClick("northU");
            }}
            style={{
              width: "225px",
              position: "absolute",
              marginTop: "75px",
              marginLeft: "200px",
              transform: "rotate(-90deg)",
            }}
            src={`/asset/arrow-u-${light.northU ? "green" : "red"}.svg`}
          />
        </Fragment>
      )}
    </div>
  );
};

export default PhaseConfig;
export type { lightConfig };
