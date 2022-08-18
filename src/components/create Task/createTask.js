import { Form, Input, Button, Select, DatePicker } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Actions } from "../../redux/actions/taskActions";



const { Option } = Select;



const categoryList = [
  "House-Hold",
  "Office",
  "Workout",
  "Family",
  "Occassions",
  "Miscellaneous",
];

    let number=1
const CreateTask = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // console.log(e);
    e.taskNumber=number
    e.date= new Date(e.date._d).toISOString().split('T')[0].split("-").reverse().join("/") 
    e.status="pending"
    e.actions=Date.now()


    dispatch(Actions.AddTask(e));
    
     number+=1;
  };

  return (
    <>
      <div className="create-task-form">
        <Form
            onFinish={handleSubmit}
            style={{ width: "600px", margin: "100px auto", top: "50px" }}
        >
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
              {categoryList.map((value) => {
                return <Option value={value}>{value}</Option>;
              })}
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
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateTask;
