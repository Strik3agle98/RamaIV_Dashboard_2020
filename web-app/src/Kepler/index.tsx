import { Row, Menu } from "antd";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Kepler = () => {

  return (
    <div className={styles.container}>
      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>กรุณาเลือก Map ที่ต้องการ</h1>
      </Row>
      <Row justify="center" className={styles.element}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/map_html_file/alley_analysis_kepler.html' target='_blank'>Alley analysis</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/alley_car_origination_and_destination_kepler.html' target='_blank'>Alley origination and destination</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/route_analysis_kepler_driverid_all.html' target='_blank'>Route analysis</a>
            </Menu.Item>
          </Menu>      
      </Row>
      
      <Row justify="center" className={styles.element}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/map_html_file/wayids_2019_kepler.html' target='_blank'>Congestion analysis by wayids</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/h3_2019_kepler.html' target='_blank'>Congestion analysis by h3</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/TravelTimeMap.html' target='_blank'>Travel time map</a>
            </Menu.Item>
          </Menu>      
      </Row>
    </div>
  );
};

export default Kepler;
