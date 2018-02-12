import React, {PureComponent} from 'react'

class NotesContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  render(){
    return(
      <div className="NotesContainer">
        Notes
      </div>
    )
  }
}

export default NotesContainer;
