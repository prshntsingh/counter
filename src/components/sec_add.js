import React, {Component} from 'react'

const Piter = (props) => {
    return (
        <button onClick={() => {
            props.cli("+")
        }}> >> </button>
    )
};
export default Piter;