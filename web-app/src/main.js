import {React, useState} from 'react';
import ButtonCluster from './button_cluster.js';

export default function Main () {
    //const [width, setWidth] = useState(1080);
    //const [height, setheight] = useState(720);

    const style = {
    //    'marginTop': '7em',
    //    'width': width,
    //    'height': height
    }

    return (
        <div className="main_window" style={style}>
            <ButtonCluster />
        </div>
    );
}
