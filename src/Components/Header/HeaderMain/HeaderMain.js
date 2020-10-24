import React from 'react';
import './HeaderMain.css';
import Particles from 'react-particles-js';
import pic1 from '../../../media/1.png';
import pic2 from '../../../media/2.png';
import pic3 from '../../../media/3.png';
import pic4 from '../../../media/4.png';
import pic5 from '../../../media/5.png';
import pic6 from '../../../media/6.png';
import pic7 from '../../../media/7.png';
import pic8 from '../../../media/8.png';
import pic9 from '../../../media/9.png';
import HeaderCard from '../HeaderCard/HeaderCard';


const HeaderMain = () => {
    return (
        <>
            <div id="header">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 1,
                                "density": {
                                    "enable": true,
                                    "value_area": 30
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "enable": true,
                                "speed": 5,
                                "random": true,
                                "direction": "horizontal",
                                "bounce": true,
                                "out_mode": "bounce",
                                "attract": {
                                    "enable": true,
                                    "rotateX": 10,
                                    "rotateY": 10
                                }
                            },
                            "shape": {
                                "type": [
                                    "image",

                                ],
                                "image": [
                                    {
                                        "src": pic1,
                                        "height": 20,
                                        "width": 23
                                    },
                                    {
                                        "src": pic2,
                                        "height": 20,
                                        "width": 20
                                    },
                                    {
                                        "src": pic3,
                                        "height": 20,
                                        "width": 20
                                    },
                                    {
                                        "src": pic4,
                                        "height": 20,
                                        "width": 20
                                    },
                                    {
                                        "src": pic5,
                                        "height": 20,
                                        "width": 20
                                    },
                                    {
                                        "src": pic6,
                                        "height": 20,
                                        "width": 20
                                    },
                                    {
                                        "src": pic7,
                                        "height": 20,
                                        "width": 20
                                    },
                                    {
                                        "src": pic8,
                                        "height": 20,
                                        "width": 20
                                    },
                                    {
                                        "src": pic9,
                                        "height": 20,
                                        "width": 20
                                    }
                                ]
                            },
                            "size": {
                                "value": 30,
                                "random": false,
                                "anim": {
                                    "enable": true,
                                    "speed": 4,
                                    "size_min": 20,
                                    "sync": false
                                }
                            }
                        },
                        "retina_detect": false
                    }} />
            </div>
            <HeaderCard></HeaderCard>
        </>
    );
};

export default HeaderMain;