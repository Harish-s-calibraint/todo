import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import CreateTask from "../create Task/createTask";
import { Actions } from "../../redux/actions/taskActions";
import "./taskList.css";
import moment from "moment";


const TaskList = () => {
  const dispatch = useDispatch();

  const[initialValue,setInitialValue]=useState({});

  

  const dataSource = useSelector((state) => state.allTasks.task);

  const setValues= (index)=>{
    if(dataSource[index].status!=="Completed"){
      dataSource[index].current=index

      setInitialValue(dataSource[index]);
    }
    
  }

  const columns = [
    {
      key: "1",
      title: "Task no:",
      dataIndex: "taskNumber",
    },
    {
      key: "2",
      title: "Task Name",
      dataIndex: "taskName",
    },
    {
      key: "3",
      title: "Date",
      dataIndex: "date",
      render:(record)=>{
        // console.log(record);
        
        return <div>{moment(record).format("YYYY-MM-DD")}</div>
      },
    },
    {
      key: "4",
      title: "Category",
      dataIndex: "category",
    },
    {
      key: "5",
      title: "Status",
      render:(record)=>{
        // console.log(record);
        //   const taskDate =new Date(record).getTime
        //   const dateNow=Date.now()
        //   // const taskStatus=""
        //   {(taskDate<dateNow) ? record="Overdue" : record="Pending"} // working on with overdue feature

        return <Tag color={record==="Completed" ? "green" : "orange"}>{record}</Tag>
        
      },
      dataIndex: "status",
    },
    {
      key: "6",
      title: "Actions",
      render: (id,record,index) => {
        return (
          <>
            <EditOutlined onClick={()=>setValues(index)} />
            <DeleteOutlined
              onClick={() => {dispatch(Actions.DeleteTask(index))}}
              style={{ marginLeft: "20px" }}
            />
            <CheckCircleOutlined
              style={{ marginLeft: "20px" }}
              onClick={() => {
                dispatch(Actions.CompleteTask(index));
              }}
            />
          </>
        );
      },
      dataIndex: "actions",
    },
  ];

  return (
    <>
      <CreateTask initialValue={initialValue} clearValues={()=>{setInitialValue({})}} />

      <div className="list"></div>
      <div className="task-list">
        <Table columns={columns} dataSource={dataSource}></Table>
       
      </div>
    </>
  );
};

export default TaskList;
