import { Row, Menu } from "antd";
import styles from "./index.module.scss";

const HTMLMap = () => {

  return (
    <div className={styles.container}>
      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>Travel Time Map</h1>
      </Row>
      <Row justify="center" className={styles.element}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/map_html_file/travel_time_map/TravelTimeMap_P10.html' target='_blank'>Travel time map by percentile 10</a>
            </Menu.Item>
          </Menu>      
      </Row>

      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>Free Flow Speed Map</h1>
      </Row>
      <Row justify="center" className={styles.element}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/map_html_file/congestion_ffs/wayids_2019_kepler.html' target='_blank'>Free flow speed map by wayids</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/congestion_ffs/wayids_popular_2019_kepler.html' target='_blank'>Free flow speed map by popular wayids</a>
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
              <a href='/map_html_file/congestion_ffs/h3_2019_kepler.html' target='_blank'>Free flow speed map by H3</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/congestion_ffs/h3_popular_2019_kepler.html' target='_blank'>Free flow speed map by popular H3</a>
            </Menu.Item>
          </Menu>      
      </Row>

      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>Speed Profile Map</h1>
      </Row>
      <Row justify="center" className={styles.element}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/map_html_file/congestion_speed_profile/wayids_popular_2019_weekdays_speed_profile_kepler.html' target='_blank'>Weekdays speed profile map by wayids</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/congestion_speed_profile/h3_2019_weekdays_speed_profile_kepler.html' target='_blank'>Weekdays speed profile map by H3</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/congestion_speed_profile/h3_popular_2019_weekdays_speed_profile_kepler.html' target='_blank'>Weekdays speed profile map by popular H3</a>
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
              <a href='/map_html_file/congestion_speed_profile/wayids_popular_2019_weekends_speed_profile_kepler.html' target='_blank'>Weekends speed profile map by wayids</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/congestion_speed_profile/h3_2019_weekends_speed_profile_kepler.html' target='_blank'>Weekends speed profile map by H3</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/congestion_speed_profile/h3_popular_2019_weekends_speed_profile_kepler.html' target='_blank'>Weekends speed profile map by popular H3</a>
            </Menu.Item>
          </Menu>      
      </Row>

      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>Route Analysis</h1>
      </Row>
      <Row justify="center" className={styles.element}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/map_html_file/route_analysis/route_analysis_kepler_driverid_all.html' target='_blank'>Popular travel pattern map</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/route_analysis/alley_car_origination_and_destination_kepler.html' target='_blank'>Popular origin and destination H3 map of alleys in RamaIV Road</a>
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
              <a href='/map_html_file/route_analysis/alley_analysis_weekdays_kepler.html' target='_blank'>Weekdays speed profile map by alley wayids</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/map_html_file/route_analysis/alley_analysis_weekends_kepler.html' target='_blank'>Weekends speed profile map by alley wayids</a>
            </Menu.Item>
          </Menu>      
      </Row>

      <Row style={{ height: "80px" }} justify="center" align="middle">
        <h1>Congestion heatmap</h1>
      </Row>
      <Row justify="center" className={styles.element}>
          <Menu
            style={{ backgroundColor: "#323436" }}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item>
              <a href='/map_html_file/congestion_heatmap/congestion_heatmap.html' target='_blank'>Congestion heatmap</a>
            </Menu.Item>
          </Menu>      
      </Row>

    </div>
  );
};

export default HTMLMap;
