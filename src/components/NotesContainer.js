import React, {PureComponent} from 'react'
import axios from 'axios'

class NotesContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/notes.json')
    .then(res => {
      console.log(res)
      this.setState({notes: res.data})
    })
    .catch(err => console.log(err))
  }

  renderOneNote = (note) => {
    return(
      <div className="Note" key={note.id}>
        <h1>{note.title}</h1>
        <p> {note.body}</p>
      </div>
    )
  }

  render(){
    return(
      <div className="NotesContainer">
        {this.state.notes.map(this.renderOneNote)}
      </div>
    )
  }
}

export default NotesContainer;
