import React, {Component} from 'react'

const Miter = (props) => {
    return (
        <button onClick={() => {
            props.cli("-")
        }}> -- </button>
    )
};
export default Miter;