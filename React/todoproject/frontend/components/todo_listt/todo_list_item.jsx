import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }
  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = Object.assign(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );
    this.props.receiveTodo(toggledTodo);
  }
  render() {
    const { todo, updateTodo } = this.props;
    const { title, done } = todo;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo} />;
    }
    return (
      <li className="todo-list-item">
       
      </li>
    );
  }
}
export default TodoListItem;
