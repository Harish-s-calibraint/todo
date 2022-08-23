import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Select, DatePicker } from "antd";
import moment from "moment";
import { Actions } from "../../redux/actions/taskActions";
import "./createTask.css";

const { Option } = Select;

const categoryList = [
  "House-Hold",
  "Office",
  "Workout",
  "Family",
  "Occassions",
  "Miscellaneous",
];

let number = 1;

const CreateTask = (props) => {
  const [initialValue, setInitialValue] = useState(props.initialValue);

  const { taskName, taskNumber, category, date, current } = props.initialValue;

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      taskName: taskName,
      category: category,
      date: date ? moment(date) : "",
    });
  }, [props.initialValue]);

  const handleSubmit = (e) => {
    e.status = "pending";

    if (taskNumber) {
      dispatch(
        Actions.EditTask({ ...e, index: current, taskNumber: taskNumber })
      );
      props.clearValues();
    } else {
      e.date = moment(e.date._d);
      e.taskNumber = number;
      number += 1;

      dispatch(Actions.AddTask(e));
    }
    form.resetFields();
  };

  return (
    <>
      <div className="create-task-form ">
        <Form onFinish={handleSubmit} form={form} name="control-hooks">
          <Form.Item
            name="taskName"
            label="Task Name"
            rules={[
              {
                required: true,
                message: "Please enter Task name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
          >
            <Input placeholder="Enter Task Name" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            required
            tooltip="Please pick a category"
            style={{ width: "300px" }}
            rules={[
              {
                required: true,
                message: "Please choose a category",
              },
            ]}
          >
            <Select placeholder="Category">
              {categoryList.map((value) => (
                <Option value={value}>{value}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="date"
            label="Completion Date"
            rules={[
              {
                required: true,
                message: "Please provide a task completion date",
              },
            ]}
            style={{ width: "300px" }}
          >
            <DatePicker
              disabledDate={(current) => {
                const customDate = moment().format("YYYY-MM-DD");
                return current && current < moment(customDate, "YYYY-MM-DD");
              }}
              style={{ width: "100%" }}
              picker="date"
              placeholder="Completion date"
            />
          </Form.Item>

          <Form.Item style={{ width: "150px" }}>
            <Button block type="primary" htmlType="submit">
              {taskNumber ? "Edit" : "Add"} Task
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateTask;
