import React, { Component } from "react";
import "./ResultRows.css";
import bar from "../assets/bar.png"

class ResultRows extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        percentage: 0
    }
    render() { 
        const { name, votes, percentage } = this.props;
        return ( 
            <div className="result-row">
                <p className="name">
                    {name}
                </p>
                <div className="votes">
                    <img src={bar} width={percentage*10} /> {votes} ({percentage}%)
                </div>
            </div>
         );
    }
}
 
export default ResultRows;