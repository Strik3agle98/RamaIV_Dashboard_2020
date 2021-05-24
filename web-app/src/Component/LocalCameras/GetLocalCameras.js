import React, { useEffect, useState } from 'react';
import { externalEndpoint } from "../../const";
import LazyLoad from "react-lazyload";
import { Row } from "antd";

import './GetLocalCameras.css'
import cameras from './camera_json.js';

const GetLocalCameras = () => {

    const [key, setKey] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        setKey(Date.now());
        }, 4000);
        return () => {
        clearInterval(interval);
        };
    }, []);

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
};
export default GetLocalCameras;