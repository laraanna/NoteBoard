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
    this.setState({[e.target.name]: e.target.value})
  }
  render(){
    return(
      <div className="Note">
        <form>
          <input className='input' type="text"
            name="Note" placeholder='Enter a Title' value={this.state.title} onChange={this.handleInput} />
          <textarea className='input' name="body"
            placeholder='Describe your note' value={this.state.body} onChange={this.handleInput}></textarea>
        </form>
      </div>
    )
  }
}
export default NoteForm
