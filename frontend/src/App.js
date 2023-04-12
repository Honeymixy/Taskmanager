import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbarr from "./component/Navbarr";
import Tasks from './component/Tasks';
import { useState } from "react";
import CreateTask from './component/CreateTask';
import EditTask from './component/EditTask';


function App() {

  const [data, setData] = useState({ tasks: [] });
  const getData = async (url) => {
    let res = await fetch(url);
    let jsonData = await res.json();
    console.log(jsonData);
    setData({ ...data, tasks: jsonData });
  };

  const deleteData = (id) => {
    fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
      method: "DELETE",
    });
  };
  const refreshPage = () => {
    window.location.reload(false);
  };

  const editTask = (e, updatedTask, id) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/tasks/update/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    }).then (res=> {
      if (res.ok){
        return 'success'
      }
    })
  };
  
  const createTask = (e, newTask) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/api/create/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    
  };

  return (
   <div>
    <BrowserRouter>
    <Navbarr />
    <hr style={{ margin: "0" }} />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tasks' element={<Tasks tasks={data.tasks}
                deleteData={deleteData}
                refreshPage={refreshPage}
                getData={getData} />} />
                <Route path='/create' element={<CreateTask createTask={createTask} />} />
                <Route path='/edit/:id' element={<EditTask editTask={editTask} />} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
