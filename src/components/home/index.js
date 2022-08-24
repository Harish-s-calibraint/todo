import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "../Task list/taskList";
import "../../App.css";

const { Header } = Layout;

const Home = () => {
  return (
    <>
      <div className="container">
        <Layout>
          <Header className="header">To-Do</Header>
        </Layout>
        <Router>
          <Routes>
            <Route path="/" element={<TaskList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default Home;
