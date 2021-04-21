import { Row, Menu } from "antd";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Kepler = () => {

  return (
    <div className={styles.container}>
      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>กรุณาเลือก Kepler ที่ต้องการ</h1>
      </Row>
      <Row justify="center">
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/kepler/alley_analysis_kepler.html' target='_blank'>Alley analysis</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/kepler/alley_car_origination_and_destination_kepler.html' target='_blank'>Alley origination and destination</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/kepler/route_analysis_kepler_driverid.html' target='_blank'>Route analysis</a>
            </Menu.Item>
          </Menu>      
      </Row>
    </div>
  );
};

export default Kepler;
