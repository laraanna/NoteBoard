import React, {PureComponent} from 'react'
import './Note.css'

class Note extends PureComponent{
  handleClick = () => {
    this.props.onClick(this.props.note.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.note.id)
  }
  render(){
    return(
      <div className="Note">
        <span className="deleteButton" onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>{this.props.note.title}</h4>
        <p onClick={this.handleClick}>{this.props.note.body}</p>
      </div>
    )
  }
}

export default Note;
