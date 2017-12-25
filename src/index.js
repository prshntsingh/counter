import React, {Component} from 'react';
import Display from './components/display';
import PlusButton from './components/plus_button';
import MinusButton from './components/minus_button';
import Piter from './components/sec_add';
import Miter from './components/sec_min';


import ReactDOM from 'react-dom';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            dis: 0
        };

        this.sub = this.sub.bind(this);
        this.ite = this.ite.bind(this);
    }


    ite(s) {
        if (this.state.x !== 0) {
            clearInterval(this.state.x);
            this.state.x = 0;
        }
        else {
            this.state.x = setInterval(() => {
                if (s === "+") {
                    if (this.state.dis < 100)
                        this.setState({dis: this.state.dis + 1})
                    else
                        this.setState({dis: 0})
                }
                else {
                    if (this.state.dis > 0)
                        this.setState({dis: this.state.dis - 1})
                    else
                        this.setState({dis: 0})
                }
            }, 1000);
        }
    }


    sub() {
        let q = this.state.dis
        if (this.state.dis === 0)
            this.setState({dis: 0})
        else
            this.setState({dis: q - 1})
    }

    render() {

        console.log("hello")
        return (
            <div className="container">
                < Display val={this.state.dis}/>
                <h1>
                    <Miter cli={this.ite}/>
                    <MinusButton onsub={this.sub}/>
                    <PlusButton onadd={() => {
                        let q = this.state.dis
                        if (this.state.dis === 100)
                            this.setState({dis: 0})
                        else
                            this.setState({dis: q + 1})

                    }}/>
                    <Piter cli={this.ite}/>
                </h1>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector(".container-fluid"));