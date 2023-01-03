import React from 'react';

export default function Fractal (props) {
    let tds = [];
    let trs = [];

    for (let i = 0; i <= props.size; i++) {
        tds.push(<td></td>);
    }

    for (let i = 0; i <= props.size; i++) {
        trs.push(<tr>{tds.slice()}</tr>);
    }

    const tbody = <tbody>{trs}</tbody>;

    const fractal_iteration_mapping = {
        'instant': 0,
        'quick': 20,
        'medium-quick': 50,
        'medium': 200,
        'medium-slow': 400,
        'slow': 700,
        'inside': 1000
    }

    // return value: 
    // 0 - outside instant
    // 1 - outside quick
    // 2 - outside medium-quick
    // 3 - outside medium
    // 4 - outside medium-slow
    // 5 - outside slow
    // 6 - inside
    function calculate(i = 0, c1, c2, z1 = 0, z2 = 0) {

    }

    return (
        <div className="fractal_content">
            <table>
                {tbody}
            </table>
        </div>
    );
}
