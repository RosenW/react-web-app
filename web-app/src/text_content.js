import React from 'react';

export default function TextContent (props) {
    return (
        <div className="text_content">
            <p>
                {props.text}
            </p>
        </div>
    );
}
