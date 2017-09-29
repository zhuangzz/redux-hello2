import { createStore } from "redux"

const initState=[
  {
    id:1,
    text:"o hou"
  },
  {
    id:2,
    text:"ha hei"
  }
]



const rootReducer=(state=initState,action)=>{
  switch(action.type){
    case "XXX":
      return state
    default :
      return state
  }
}

const Store = createStore(rootReducer)
export default Store
