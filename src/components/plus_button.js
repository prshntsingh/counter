import React, {Component} from 'react'
import Button from 'react-bootstrap/lib/Button';


const PlusButton = (props) => {
    return (

        <Button bsStyle='success' onClick={() => {
            props.onadd()
        }}>+</Button>

        // {/*<button className= "button" onClick={() => {*/}
        //     {/*props.onadd()*/}
        // {/*}}>+</button>*/}
    )
};
export default PlusButton;