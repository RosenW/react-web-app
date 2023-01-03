import {React, useState} from 'react';

export default function ContentWindow (props) {
    return (
        <div className="mw_content_window">
            {props.children}
        </div>
    );
}
