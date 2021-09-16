import React,{ Component } from 'react';


import  Modal  from './Components/Modal.js';
import './Components/Style.css';


 class App extends Component {
    constructor(props) {
        super(props);
        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
 
     this.state={
         todoList:[],
         requiredItem: 0,
         newTodo:"",

     }
    }
    replaceModalItem(index) {
        this.setState({
          requiredItem: index
        });
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
      saveModalDetails=(index)=> {
         console.log(index);
        const requiredItem = this.state.requiredItem;
        let templist = [...this.state.todoList];
        
        templist[requiredItem]=index.item;
        this.setState({ todoList: templist });
      }
    
     
deleteTodoTask=(event,index)=> {
     
    var taskArray=[...this.state.todoList]
    taskArray.splice(index,1)
    
    this.setState({todoList:taskArray})
    
}
 
    render(){
        const requiredItem = this.state.requiredItem;
        let modalData = this.state.todoList[requiredItem];
       console.log(this.state.todoList);
    return (
<div>
  <div className="jumbotron jumbotron-fluid py-2">
  <div className="container">
  <h1 className="display-4">Todo App</h1>
  <style>{'body { background-color: aquamarine; }'}</style>
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

                     <button className="btn btn btn-sm btn-primary m-7 float-right" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</button> {" "}                
                     
                 </li>
             }
         )
     }
</ul>
<div>
<Modal
          item={modalData}
        
          saveModalDetails={this.saveModalDetails}
        />
    
  </div>

</div>
    
      ); 
}


 }
 export default App ;
