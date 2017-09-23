import React from 'react';

export const Panel = (props) => {
    let className = "panel";
    if (props.success) className += ' success';
    else if (props.error) className += ' error';
    else if (props.warning) className += ' warning';
    else if (props.default) className += ' default';
    return (
        <div className={className}>
            {props.title ? <div className="panel-heading">{props.title}</div> : null}
            <div className="panel-body">
                {props.children}
            </div>
        </div>
    );
};