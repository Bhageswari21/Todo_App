import React,{ Component } from 'react';

import './App.css';

 class App extends Component{
     state={
         todoList:[],
         newTodo:"",
     }
  
    render(){
       
    return (
<div>
  <div className="jumbotron jumbotron-fluid py-2">
  <div className="container">
  <h1 className="display-4">Todo App</h1>
   
  </div>
  </div>
<form className="mb-3" onSubmit= {this.handleSubmit}>
    <div className="input-group">
    <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task" autoComplete="off"/>
    <div className="input-group-append">
    <button type="submit" className="btn btn-outline-success"> Add </button>
    </div>
    </div>
</form>
 
<ul className="list-group">
     {
         this.state.todoList.map(
             (item,index)=>{
                 return<li className="list-group-item"key ={index}>
                     {item}
                     <button className="btn btn-sm btn-outline-danger float-right" onClick={(event)=>{this.deleteTodoTask(event,index)}}>Delete</button>
                     <button className="btn btn btn-sm btn-primary m-7 float-right" onClick={(event=>{this.editTodo(index)})} > Edit </button>
                 </li>
             }
         )
     }
</ul>
</div>
      
);
}

handleSubmit =(event)=>{
     var taskDesc= event.target.elements.todoTask.value;
     if(taskDesc.length >0){
    this.setState({
    todoList:[...this.state.todoList,taskDesc]
})
    event.target.reset();
     }
    event.preventDefault();
}
 
editTodo =(index)=>
 {
    var newtodoList=[...this.state.todoList]
    const newTodo= prompt('Let\'s make some change',newtodoList[index]);
    newtodoList[index]=newTodo
    this.setState({todoList:newtodoList})

 }

deleteTodoTask=(event,index)=> {
     
     var taskArray=[...this.state.todoList]
     taskArray.splice(index,1)
     
     this.setState({todoList:taskArray})
     
 }

}
export default App;
