import React, { Component } from 'react'

class NewTaskForm extends Component {
    state = {
        title : "",
        done : false
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    onChange = (event) => {
        this.setState({
            title : event.target.value
        })
    }

    render() {
        return (
            <form id="new-task-form" className="task" onSubmit={this.onSubmitHandler}>                
                <input type="text" name="title" onChange={this.onChange}/>                
                <button type="submit">submit</button> 
            </form>
        )
    }
}

export default NewTaskForm