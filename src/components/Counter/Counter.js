import React from "react";
import { connect } from "react-redux";

const increment = {
    type: 'INCREMENT'
}

 class Counter extends React.Component {


    handleInc(){
        this.props.dispatch(increment);
    }
    render(){
        console.log(this.props);
        return(
            <div>
                counter
                <button onClick={this.handleInc.bind(this)}>+</button>
                <p>{this.props.count}</p>

            </div>
        )
    }
 }


 const mapStateToProps = (state) => {
    return{
        count: state
    }
 }

 export default connect(mapStateToProps)(Counter);