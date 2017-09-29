import React ,{ Component } from 'react'
import './comment-box.css'
import Store from "../../Store"


class CommentBox extends Component{
  state={
    comment:"",
    comments:[]
  }
  handleChange=(e)=>{
    this.setState({
      comment:e.target.value
    })
  }
  handleSubmit=()=>{
    this.setState({
      comment:""
    })
  }
  render(){
    const {
      comment }=this.state
      const comments=Store.getState()
    const CommentList=comments.map(t=>(
      <h3 key={t.id}>{t.text}</h3>
    ))
    return(
      <div className="comment-box-wrap">
        <div className="comment-box">
          <div className="comment-form">
            <input type="text" value={comment} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>提交</button>
          </div>
          <div className="comment-list">
            {CommentList}
          </div>


        </div>


      </div>
    )
  }
}
export default CommentBox
