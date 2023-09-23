import { Component } from "react";
import "./count.css"

export default class Count extends Component{
    state = {
        value: 0,
        error: false
    }

    

    changeValue = (value) => {
        this.setState({ value, error: false })
    }

    onMinus = () =>  this.changeValue(this.state.value-1) 

    onPlus = () =>  this.changeValue(this.state.value+1) 

    onInputChange = (e) => {
        const value = Number(e.target.value.trim());

        if(isNaN(value)){
            return this.setState({ error: true })
        }

        this.setState({value, error: false})
    }

    render(){
        const { value, error } = this.state;



        return(
            <div className="counter">
                <button onClick={this.onMinus}>-</button>
                <input type="text" value={value} onChange = {this.onInputChange}/>
                <button onClick={this.onPlus}>+</button>
                {error ? <div className="errorDiv">Input only number</div> : null}
            </div>
        )
    }
}