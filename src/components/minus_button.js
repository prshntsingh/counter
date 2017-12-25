import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';

const MinusButton = (props)=>{
    return(

        <Button bsStyle='danger' onClick={() => {
            props.onsub()
        }}>-</Button>

    //     //{/*<button type="button" onClick={()=>{props.onsub()}}> Minus1 </button>*/}
    // <button type="button" onClick={props.onsub}> -- </button>
    )
};

export default MinusButton;