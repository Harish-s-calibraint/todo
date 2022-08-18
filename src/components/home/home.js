
import { Layout } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './home.css'
import CreateTask from '../create Task/createTask'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TaskList from '../Task list/taskList';
import '../../App.css'


const { Header } = Layout;
 
 const Home = ()=> {

    return(
    <>
        <div className="container">
        <Layout>
                <Header className='header'>To-Do</Header>
                </Layout>
           
            <Router>
              <Routes>
              <Route path='/' element={<TaskList/>}/> 
              {/* <Route path='/createtask' element={<CreateTask/>}/>  */}

              </Routes>


            </Router>

                
        </div>
    </>

    );
 }

 export default Home;