import { Component } from "react";
import "./count.css"

export default class Count extends Component{
    state = {
        count: 0,
    }

    buttonFunc = (event) => {
        console.log(event);

        if( event.target.innerHTML === "+"){
            this.setState({
                count: this.state.count+1
            })
        }else{
            this.setState({
                count: this.state.count-1
            })
        }
        
    }

    render(){
        const { count } = this.state;



        return(
            <div className="counter">
                <button onClick={this.buttonFunc}>-</button>
                <input type="text" value={count}/>
                <button onClick={this.buttonFunc}>+</button>
            </div>
        )
    }
}