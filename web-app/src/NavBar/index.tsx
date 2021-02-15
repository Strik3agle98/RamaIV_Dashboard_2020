import React from "react";
import { Row, Col, Menu } from "antd";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Row
        className={styles.navBarContainer}
        justify="space-around"
        align="middle"
      >
        <Col className={styles.logoContainer} span={4}>
          <img alt="logo" className={styles.logo} src="/asset/logo_dark.svg" />
        </Col>
        <Col span={12} />
        <Col span={8}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
