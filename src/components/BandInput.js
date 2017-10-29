import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ""
  }

  handleTextChange = (event) => {
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log('band input submitted');
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      bands: this.state,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Band Input </label>
            <input type="text" onChange={(event) => this.handleTextChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
