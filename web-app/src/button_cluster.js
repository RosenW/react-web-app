import {React, useState} from 'react';
import Button from './button.js';

export default function ButtonCluster (props) {
    const [selected_button_id, setSelectedButton] = useState(props.selected_button_id);
    const [buttons, setButtons] = useState(props.buttons);
    const buttons_bfr = [];

    function getButtonElIDByID(id) {
        return "mw_button_" + id;
    }

    for (let i = 0; i < buttons.length; i++) {
        const el_id = getButtonElIDByID(i);
        buttons_bfr.push(
            <Button
                id={ i }
                key={ el_id }
                el_id={ el_id }
                text={ buttons[i].text }
                selected={ selected_button_id === i }
                onClick={ (id) => { changeButton(id) } }
            />
        );
    }

    function changeButton(button_id) {
        setSelectedButton(button_id);
        props.onButtonChange(button_id);
    }

    return (
        <div className="mw_button_cluster">
            {buttons_bfr}
        </div>
    );
}
