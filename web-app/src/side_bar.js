import React from 'react';
import SideBarButton from './side_bar_button.js';

export default function SideBar (props) {
    const selected_button_id = props.selected_button_id;
    const selected_tab_id = props.selected_tab_id;
    const buttons = props.buttons;

    const buttons_bfr = [];
    const selected_buttons = buttons[selected_tab_id];

    for (let i = 0; i < selected_buttons.length; i++) {
        const el_id = 'side_bar_btn_' + i;
        buttons_bfr.push(
            <SideBarButton
                id={ i }
                key={ el_id }
                el_id={ el_id }
                text={ selected_buttons[i].text }
                selected={ selected_button_id === i }
                onClick={ (id) => {
                    props.onButtonChange(id);
                }}
            />
        );
    }

    return (
        <div className="mw_side_bar">
            {buttons_bfr}
        </div>
    );
}
