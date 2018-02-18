import React, {PureComponent} from 'react'

class Note extends PureComponent{
  handleClick = () => {
    this.props.onClick(this.props.note.id)
  }
  render(){
    return(
      <div className="Note" key={note.id}>
        <h4 onClick={this.handleClick}>{this.props.note.title}</h4>
        <p onClick={this.handleClick}>{this.props.note.body}</p>
      </div>
    )
  }
}

export default Note;
