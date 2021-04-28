import React, { Component } from 'react'

class NewTaskForm extends Component {
    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.onSubmit({
            body : 'dkjshfkjdsa'
        })
    }
    render() {
        return (
            <form id="new-task-form" onSubmit={this.onSubmitHandler}>
                <input type="text" name="title" />
                <button type="submit">submit</button> 
            </form>
        )
    }
}

export default NewTaskForm