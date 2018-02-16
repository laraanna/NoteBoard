import React, {PureComponent} from 'react'
import axios from 'axios'
import './NoteForm.css'

class NoteForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    return(
      <div className="Note">
        <form>
          <input className='input' type="text"
            name="Note" placeholder='Enter a Title' />
          <textarea className='input' name="body"
            placeholder='Describe your note'></textarea>
        </form>
      </div>
    )
  }
}
export default NoteForm
