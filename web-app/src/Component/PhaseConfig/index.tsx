import React, { Fragment, useEffect, useState } from "react";
import type { light, orientations } from "../TrafficPhase";
import styles from "./index.module.scss";

interface lightConfig {
  light: light;
  intersectionType?: string;
  orientation?: orientations;
  onClick: (key: keyof light) => void;
}

const translate = ["red", "green", "red"];

const PhaseConfig = ({
  light,
  intersectionType,
  orientation,
  onClick,
}: lightConfig) => {
  return (
    <div
      style={{
        backgroundImage: `url(/asset/traffic-phase${
          intersectionType === "quad" ? "" : `-tri-${orientation}`
        }.svg)`,
        width: "900px",
        height: "900px",
      }}
    >
      {!(intersectionType === "tri" && orientation === "west") && (
        <Fragment>
          {light.eastLeft !== 2 && (
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
              src={`/asset/arrow-left-${translate[light.eastLeft || 2]}.svg`}
            />
          )}
          {light.east !== 2 && (
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
              src={`/asset/arrow-${translate[light.east || 2]}.svg`}
            />
          )}
          {light.eastRight !== 2 && (
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
              src={`/asset/arrow-turn-${translate[light.eastRight || 2]}.svg`}
            />
          )}
          {light.eastU !== 2 && (
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
              src={`/asset/arrow-u-${translate[light.eastU || 2]}.svg`}
            />
          )}
        </Fragment>
      )}
      {!(intersectionType === "tri" && orientation === "north") && (
        <Fragment>
          {light.southLeft !== 2 && (
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
              src={`/asset/arrow-left-${translate[light.southLeft || 2]}.svg`}
            />
          )}
          {light.south !== 2 && (
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
              src={`/asset/arrow-${translate[light.south || 2]}.svg`}
            />
          )}
          {light.southRight !== 2 && (
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
              src={`/asset/arrow-turn-${translate[light.southRight || 2]}.svg`}
            />
          )}
          {light.southU !== 2 && (
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
              src={`/asset/arrow-u-${translate[light.southU || 2]}.svg`}
            />
          )}
        </Fragment>
      )}
      {!(intersectionType === "tri" && orientation === "east") && (
        <Fragment>
          {light.westLeft !== 2 && (
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
              src={`/asset/arrow-left-${translate[light.westLeft || 2]}.svg`}
            />
          )}
          {light.west !== 2 && (
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
              src={`/asset/arrow-${translate[light.west || 2]}.svg`}
            />
          )}
          {light.westRight !== 2 && (
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
              src={`/asset/arrow-turn-${translate[light.westRight || 2]}.svg`}
            />
          )}
          {light.westU !== 2 && (
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
              src={`/asset/arrow-u-${translate[light.westU || 2]}.svg`}
            />
          )}
        </Fragment>
      )}
      {!(intersectionType === "tri" && orientation === "south") && (
        <Fragment>
          {light.northLeft !== 2 && (
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
              src={`/asset/arrow-left-${translate[light.northLeft || 2]}.svg`}
            />
          )}
          {light.north !== 2 && (
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
              src={`/asset/arrow-${translate[light.north || 2]}.svg`}
            />
          )}
          {light.northRight !== 2 && (
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
              src={`/asset/arrow-turn-${translate[light.northRight || 2]}.svg`}
            />
          )}
          {light.northU !== 2 && (
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
              src={`/asset/arrow-u-${translate[light.northU || 2]}.svg`}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

export default PhaseConfig;
export type { lightConfig };
