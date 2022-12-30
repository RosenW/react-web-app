import {React, useState} from 'react';
import Button from './button.js';

export default function ButtonCluster () {
    const [buttons_arr, setButtonsArr] = useState([
        { text: "Main Menu", selected: true },
        { text: "Fractals", selected: false },
        { text: "AI", selected: false }
    ]);

    const buttons_bfr = [];

    function getButtonElIDByNumber(num) {
        return "mw_button_" + num;
    }

    for (let i = 0; i < buttons_arr.length; i++) {
        buttons_bfr.push(
            <Button
                key={ getButtonElIDByNumber(i) }
                text={ buttons_arr[i].text }
                selected={ buttons_arr[i].selected }
                id={ getButtonElIDByNumber(i) }
                onClick={ (id) => { changeButton(id) } }
            />
        );
    }

    function changeButton(button_id) {
        const new_buttons_arr = buttons_arr.slice();

        for (let i = 0; i < buttons_bfr.length; i++) {
            new_buttons_arr[i].selected = (getButtonElIDByNumber(i) == button_id ? true : false);
        }

        setButtonsArr(new_buttons_arr);
    }

    return (
        <div className="mw_button_cluster">
            {buttons_bfr}
        </div>
    );
}
