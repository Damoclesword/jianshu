import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListWrapper, ListItemContent } from '../style'

class List extends Component {
  render() {
    const { noteList } = this.props
    return (
      <ListWrapper>
        <div className="row-line" />
        {noteList.map(note => (
          <ListItemContent
            key={note.get('id')}
            imgUrl={note.get('imgUrl')}
            title={note.get('title')}
            abstract={note.get('abstract')}
            nickname={note.get('nickname')}
            comment={note.get('comment')}
            like={note.get('like')}
          />
        ))}
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const homeState = state.get('home')
  return {
    noteList: homeState.get('noteList'),
  }
}

export default connect(mapStateToProps)(List)
