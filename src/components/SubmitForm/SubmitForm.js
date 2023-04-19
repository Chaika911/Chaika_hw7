
// import React from "react";
// import { v4 } from "uuid";
// import Icon from "../Icon/Icon";

// class SubmitForm extends React.Component {
//   state = {
//     value: ''
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (!this.state.value) {
//       return;
//     }

//     const item = {
//       ...this.state,
//       id: v4(),
//     };

//     this.props.onAddItem(item);
//     this.setState({
//       value: ''
//     });
//   }

//   handleChange = (e) => {
//     this.setState({ value: e.target.value });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter todo"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />

//         <button
//           style={{
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'contain',
//             backgroundPosition: 'center',
//             cursor: 'pointer'
//           }}
//         >
//             <Icon name="add" />
//         </button>

//       </form>
//     );
//   }
// }

// export default SubmitForm;





// exercise 6

import React from "react";
import { v4 } from "uuid";
import Icon from "../Icon/Icon";

class SubmitForm extends React.Component {
  state = {
    value: '',
    showModal: false, //
    todos: [] //
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) {
      return;
    }

    const newTodo = {
      value: this.state.value,
      checked: false,
      id: v4(),
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      value: '',
      showModal: false
    });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleCheck = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked
        }
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div>
        <button
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            cursor: 'pointer'
          }}
          onClick={this.toggleModal}
        >
          <Icon name="add" />
        </button>

        {this.state.showModal && (
          <div>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 9999
              }}
              onClick={this.toggleModal}
            ></div>
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '20px',
                zIndex: 10000
              }}
            >
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter todo"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <button type="submit">Готово</button>
              </form>
            </div>
          </div>
        )}

        {this.state.todos.map(todo => (
          <div key={todo.id}>
            <button onClick={() => this.handleCheck(todo.id)}>
              {todo.checked ? <Icon name="check" /> : "check"}
            </button>
            <span>{todo.value}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default SubmitForm;
