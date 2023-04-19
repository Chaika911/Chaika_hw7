import React from 'react';
import './App.css';
import SubmitForm from '../SubmitForm/SubmitForm';
import TodoList from '../TodoList/TodoList';
import Counter from '../Counter/Counter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
    this.handleAddListItem = this.handleAddListItem.bind(this);
  }

  handleAddListItem(item){
    const updatedList = [...this.state.list, item]

    this.setState({
      list: updatedList
    })
  }

  handleDelete(id){
    const updateList = this.state.list.filter(item => item.id !== id);

    this.setState({
      list: updateList
    })
  }
  render(){
    return (
      <div className="App">
          <SubmitForm onAddItem={this.handleAddListItem}/>
          <TodoList list={this.state.list} onDelete={this.handleDelete.bind(this)}/>

          <Counter />
      </div>
    )
  }
}

export default App;
