import { useState } from "react";
import moment from "moment";
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

const TaskList = () => {
  const dispatch = useDispatch();
  const [initialValue, setInitialValue] = useState({});
  const taskDetails = useSelector((state) => state.allTasks.task);

  const setValues = (index) => {
    if (taskDetails[index].status !== "Completed") {
      taskDetails[index].current = index;

      setInitialValue(taskDetails[index]);
    }
  };

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
      render: (record) => {
        return <div>{moment(record).format("YYYY-MM-DD")}</div>;
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
      render: (item, record) => {
        const taskDate = new Date(record.date._d).getTime();
        const dateNow = Date.now();
        const taskStatus = item ? "Completed" : taskDate >= dateNow ? "Pending" : "Overdue";
        let color;
        switch (taskStatus) {
          case "Pending":
            color = "orange";
            break;

          case "Overdue":
            color = "red";
            break;
          default:
            color = "green";
            break;
        }
        return <Tag color={color}>{taskStatus}</Tag>;
      },
      dataIndex: "status",
    },
    {
      key: "6",
      title: "Actions",
      render: (id, record, index) => {
        return (
          <>
            <EditOutlined onClick={() => setValues(index)} />
            <DeleteOutlined
              onClick={() => {
                dispatch(Actions.DeleteTask(index));
              }}
              className="actions-btn"
            />
            <CheckCircleOutlined
              className="actions-btn"
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
      <CreateTask
        initialValue={initialValue}
        clearValues={() => {
          setInitialValue({});
        }}
      />
      <div className="task-list">
        <Table columns={columns} dataSource={taskDetails}></Table>
      </div>
    </>
  );
};

export default TaskList;
