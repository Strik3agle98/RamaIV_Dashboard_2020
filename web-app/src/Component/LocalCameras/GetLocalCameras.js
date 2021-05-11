import React, { useEffect, useState, Component } from 'react';
import { externalEndpoint } from "../../const";
import LazyLoad from "react-lazyload";
import { Row, Col } from "antd";

import './GetLocalCameras.css'
import cameras from './camera_json.js';


// it's return a json file
class GetLocalCameras extends Component {
    constructor(props){
        super(props);
        this.state = {            
            cameras :cameras            
        };
    }
    render() {
        const {cameras} = this.state;
        const { key } = this.props;

        return(
            <div>
                <ol className="item">
                {
                    cameras.map(camera => (
                        <li key={camera.id} align="start">
                            <div>
                                <p className="body">แยก{camera.name}</p>
                                <Row>
                                    {camera.camera.map((cameraId) => (
                                    <LazyLoad>
                                        <img
                                        src={`${externalEndpoint}image/${cameraId}?${key}`}
                                        alt="id-20-intersection"
                                        />
                                    </LazyLoad>
                                    ))}
                                </Row>
                            </div>
                        </li>
                    ))
                }
                </ol>
            </div>
        );
    }
  }
  
  export default GetLocalCameras;