import React, {PureComponent} from 'react'
import axios from 'axios'
import './NotesContainer.css'
import Note from './Note'

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

  render(){
    return(
      <div className="NotesContainer">
      <button className="NewNote">Create Note</button>
        {this.state.notes.map((note) => {
          return (<Note note={note} key={note.id}/>)
        })}
      </div>
    )
  }
}

export default NotesContainer;
