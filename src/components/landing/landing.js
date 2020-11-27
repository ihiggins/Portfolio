import Particles from 'react-particles-js';
import styles from './landing.module.css';
import Scroll from '../scroll/scroll';

export function Landing(){


    return (
        <div className={styles.page} id='landing'>
    <Particles className={styles.page}

        params={{
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "right",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events":{
                    "onDiv":[
                        {'enable':true,
                        "selectors": ".bounce.rectangle",
                        "mode": "bounce",
                        "type": "rectangle"}
                    ]
                }
                
            }
        }}/>
            <div className={styles.textContainer}>
                <h1>Isaac Higgins, <br></br>
                Full-stack Developer</h1>
                
            </div>
            <Scroll></Scroll>
    </div>


    )



} 