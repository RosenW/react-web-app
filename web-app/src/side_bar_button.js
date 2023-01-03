import {React, useState} from 'react';

export default function SideBarButton (props) {
    const [height, setheight] = useState(75);

    const btn_style = {
        'height': height,
    }

    const btn_class = (props.selected ? 'side_bar_button_selected' : 'side_bar_button');

    return (
        <a id={props.el_id} className={btn_class} style={btn_style} onClick={ () => { props.onClick(props.id) }}>
            <div>
                {props.text}
            </div>
        </a>
    );
}
