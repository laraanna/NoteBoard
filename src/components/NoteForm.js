import React, {PureComponent} from 'react'
import axios from 'axios'
import './NoteForm.css'


class NoteForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const note = {
      title: this.state.title ,
      body: this.state.body
    }
    axios.put(
      `http://localhost:3001/api/v1/notes/${this.props.note.id}`,
      {note: note}
      )
      .then(response => {
        console.log(response)
        this.props.updateNote(response.data)
      })
      .catch(err => console.log(err))
    }

  render(){
    return(
      <div className="Note">
        <form onBlur={this.handleBlur} >
          <input className='input' type="text"
            name="title" placeholder='Enter a Title' value={this.state.title} onChange={this.handleInput} />
          <textarea className='input' name="body"
            placeholder='Describe your note' value={this.state.body} onChange={this.handleInput}></textarea>
        </form>
      </div>
    )
  }
}
export default NoteForm
