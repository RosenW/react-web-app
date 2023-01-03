import { React, useState } from 'react';
import ButtonCluster from './button_cluster.js';
import ContentWindow from './content_window.js';
import SideBar from './side_bar.js';
import TextContent from './text_content.js';
import Fractal from './fractal.js';

import welcome from './text_files/welcome.js';
import computer_programming from './text_files/1_computer_programming.js';

const files = {
    'welcome': welcome,
    'computer_programming': computer_programming
}

let init = false;

export default function Main () {
    const [selected_tab_id, setSelectedTab] = useState(0);
    const [selected_side_button_id, setSelectedSideButton] = useState(0);
    const [content_window_components, setWindowComponents] = useState([]);

    const nav_buttons = [
        { text: "Welcome" },
        { text: "Programming Theory" },
        { text: "Fractals" },
        { text: "AI" },
        { text: "Memes" }
    ];


    const side_bar_buttons = [
        [
            { text: "Hello", components: [ { key: 1, type: "text", file: "welcome"} ] },
        ],
        [
            { text: "Computer Programming", components: [ { key: 1, type: "text", file: "computer_programming"} ] },
            { text: "Basic Computer Hardware Architecture", components: [ ] },
            { text: "Programming Basics", components: [ ] },
            { text: "Object Oriented Programming (OOP)", components: [ ] },
            { text: "Design Patterns (GoF)", components: [ ] },
            { text: "Technologies", components: [ ] },
            { text: "Full Stack", components: [ ] },
        ],
        [
            { text: "Fractal 1", components: [{  key: 1, type: "fractal" } ] },
            { text: "Fractal 2", components: [ ] },
            { text: "Fractal 3", components: [ ] }
        ],
        [
            { text: "Draw Numbers", components: [ ] }
        ],
        [
            { text: "Review", components: [ ] }
        ]
    ];

    function changeContentWindow(tab_id, button_id) {
        const components_bfr = [];
        const content = side_bar_buttons[tab_id][button_id];

        for (const component of content.components) {
            if (component.type === "text") {
                components_bfr.push(<TextContent text={files[component.file]} key={component.key} />);
            } else if (component.type === "fractal") {
                components_bfr.push(<Fractal key={component.key} size={40} />);
            } else {
                // ASSERT("Unrecognized component");
            }
        }
        
        setWindowComponents(components_bfr);
    }

    if (!init) {
        changeContentWindow(selected_tab_id, selected_side_button_id);
        init = true;
    }

    return (
        <div className="main_window">
            <div className="mw_top">
                <ButtonCluster
                    selected_button_id={selected_tab_id}
                    buttons={nav_buttons}
                    onButtonChange={(tab_id) => {
                        setSelectedSideButton(0);
                        setSelectedTab(tab_id);
                        changeContentWindow(tab_id, 0);
                    }}
                />
            </div>
            <div className="mw_bottom">
                <SideBar
                    selected_tab_id={selected_tab_id}
                    selected_button_id={selected_side_button_id}
                    buttons={side_bar_buttons}
                    onButtonChange={(button_id) => {
                        setSelectedSideButton(button_id);
                        changeContentWindow(selected_tab_id, button_id);
                    }}
                />
                <ContentWindow>
                    {content_window_components}
                </ContentWindow>
            </div>
        </div>
    );
}
