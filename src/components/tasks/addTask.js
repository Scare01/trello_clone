import React from 'react';
import { Form } from 'semantic-ui-react';

class AddTask extends React.Component {
  state = {
    name: ''
  }

  addTask = () => {
    if(this.state.name) {
      this.props.addTaskToList(this.state.name);
      this.setState({name: ''}) 
    }
    
  }

  render(){
    return (
      <Form onSubmit={this.addTask} className="taskAdd">
        <Form.Input 
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
      </Form>
    )
  }
}

export default AddTask;