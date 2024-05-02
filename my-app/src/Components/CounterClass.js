import React from "react";
import {Component} from "react";

class CounterClass extends Component{


    constructor(props)
    {
        console.log("Constructor")
        super(props);
        this.state={
            count:4
        }
    }

    incrementCount=()=>{
    this.setState((prevState)=>{
    return {count: prevState.count+1}
    });
    }

    decrementCount=()=>{
        this.setState((prevState)=>{
        return {count: prevState.count-1}
        });
        }

        
        render()
        {
            return (
                <div>
                    <h1>Count : {this.state.count}</h1>
                    <button onClick={this.incrementCount}>Increment Count</button>
                    <button onClick={this.decrementCount}>Decrement Count</button>
                </div>
            )
        }
    }


export default CounterClass;