import React, {PureComponent} from 'react'
import axios from 'axios'
import './NotesContainer.css'
import Note from './Note'
import update from 'immutability-helper'
import NoteForm from './NoteForm'

class NotesContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      editingNoteId: null
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

  addNewNote = () => {
    axios.post(
      'http://localhost:3001/api/v1/notes',
      { note:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(res => {
      console.log(res)
      const notes = update(this.state.notes, {
        $splice:[[0,0, res.data]]
      })
      this.setState({
        notes: notes,
        editingNoteId: res.data.id
      })
    })
    .catch(err => console.log(err))
  }

  updateNote = (note) => {
    const noteIndex = this.state.notes.findIndex(x => x.id === note.id)
    const notes = update(this.state.notes, { [noteIndex]: {$set: note} })
    this.setState({
      notes: notes
    })
  }

  render(){
    return(
      <div className="NotesContainer">
      <button className="NewNote" onClick={this.addNewNote}>Create Note</button>
        {this.state.notes.map((note) => {
          if(this.state.editingNoteId === note.id){
            return(<NoteForm note={note} key={note.id} updateNote={this.updateNote} />)
          } else {
            return (<Note note={note} key={note.id}/>)
          }
        })}
      </div>
    )
  }
}

export default NotesContainer;
