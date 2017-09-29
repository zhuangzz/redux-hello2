import React ,{ Component } from 'react'
import './app.css'
import CommentBox from '../CommentBox/CommentBox'
import PostBody from '../PostBody/PostBody'

class App extends Component{
  render(){
    return(
      <div className="app">
        <PostBody />
        <CommentBox />
      </div>
    )
  }
}
export default App
