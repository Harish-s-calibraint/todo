import {  Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
// import { useState } from "react";
import "./taskList.css";
import CreateTask from "../create Task/createTask";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/actions/taskActions";
// import { useState } from "react";


const TaskList = () => {
  const dispatch=useDispatch()

    // const[isEditing,setIsEditing]=useState(false);
    // const[editingTask,setEditingTask]=useState(null)

    const dataSource=useSelector((state)=>state.allTasks.task)
    // console.log(dataSource);

//   const [dataSource, setDataSource] = useState(tasks);


//     console.log(dataSource);
//   [
//     {
//       taskNumber: "",
//       taskName:"",
//       date: "",
//       category: "",
//       status: "",
//       Actions: "",
//     },
//   ]

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
    },
    {
      key: "4",
      title: "Category",
      dataIndex: "category",
    },
    {
      key: "5",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={()=> dispatch(Actions.EditTask(record)) }/>
            <DeleteOutlined onClick={()=> dispatch(Actions.DeleteTask(record))} style={{ marginLeft: "20px" }} />
            <CheckCircleOutlined
              style={{ marginLeft: "20px" }}
            //   disabled={true}
              // onClick={()=> { dispatch(Actions.CompleteTask(record))}}
          
            />
          </>
        );
      },
      dataIndex: "actions",
    },
  ];
  // const onEditTask=(record)=>{
  //    setIsEditing(true);
  //    setEditingTask({...record});
  // };
  // const resetEditing=()=>{
  //   setIsEditing(false);
  //   setEditingTask(null);
  // }

  return (
    <>
      <CreateTask />

      <div className="list"></div>
      <div className="task-list">
        <Table columns={columns} dataSource={dataSource}></Table>
        {/* <Modal
        title="Edit task"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {

          return 
        }}
        >

        </Modal> */}
      </div>
    </>
  );
};

export default TaskList;
