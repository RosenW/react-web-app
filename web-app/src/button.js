import {React, useState} from 'react';

export default function Button (props) {
    const [height, setheight] = useState(75);

    const btn_style = {
        'height': height,
    }

    const ul_style = {
        'display': (props.selected ? 'block' : 'none')
    }

    const btn_class = (props.selected ? 'mw_button_selected' : 'mw_button');

    return (
        <a id={props.id} className={btn_class} style={btn_style} onClick={ () => { props.onClick(props.id) }}>
            <div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" className="react_icon"></img>
                {props.text}
                {props.selected}
            </div>

            <span className="mw_button_underlining" style={ul_style}></span>
        </a>
    );
}
