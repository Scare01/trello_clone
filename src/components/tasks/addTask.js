import React from 'react';
import { Form } from 'semantic-ui-react';

class AddTask extends React.Component {
  state = {
    name: ''
  }

  addTask = () => {
    //some code
  }

  render(){
    return (
      <Form onSubmit={this.addTask}>
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