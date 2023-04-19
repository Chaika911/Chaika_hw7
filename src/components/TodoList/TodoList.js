import React from "react";
import Icon from "../Icon/Icon";


class TodoList extends React.Component {

    state = {
        isCheck: false
    }


    handleDelete(id){
        this.props.onDelete(id)
    }
    handleChecked(id){
        this.setState({isCheck: !this.state.isCheck});

    }
    render(){



        return(
            <ul>
                {this.props.list.map(item => {
                    const {id, value} = item;
                    return (
                        <li key={id}>
                            {this.state.isCheck && <Icon name='check' />}
                            <button
                            onClick={this.handleChecked.bind(this, id)}>
                                check
                            </button>

                            {value}

                            <button onClick={this.handleDelete.bind(this, id)}>
                                X
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default TodoList;