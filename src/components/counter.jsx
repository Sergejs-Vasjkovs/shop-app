import React from 'react';

const Counter = (props) => {

    const { value } = props;

    const formatValue = () => value === 0 ? "empty" : value;

    const getBadgeClasses = () => `badge m-2 ${value === 0 ? "bg-warning" : "bg-primary"}`;

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                onClick={() => props.onIncrement(props.id)}>+</button>
            <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                onClick={() => props.onDecrement(props.id)}>-</button>
            <button
                type="button"
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}>
                Delete</button>
        </div>
    );
};

export default Counter;