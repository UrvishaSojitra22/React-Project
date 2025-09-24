import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState([]);
  const [person] = useState(["Team Leader", "Manager", "Employee"]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      getLocalstorageData();
    }, 1000);
  }, []);

  const getLocalstorageData = () => {
    const data = JSON.parse(localStorage.getItem('taskdata'));
    if (data) {
      setTaskList(data);
      setLoading(true);
    } else {
      setTaskList([]);
    }
  };

  const getInputdata = (e) => {
    const { name, value } = e.target;

    if (name === 'member') {
      const updatedMembers = [...member];
      if (updatedMembers.includes(value)) {
        const pos = updatedMembers.indexOf(value);
        updatedMembers.splice(pos, 1);
      } else {
        updatedMembers.push(value);
      }
      setMember(updatedMembers);
    } else {
      setTask({ ...task, [name]: value });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    const updatedList = [...taskList];
    const taskWithMembers = { ...task, member };

    if (index !== -1) {
      updatedList[index] = taskWithMembers;
    } else {
      taskWithMembers.id = Math.round(Math.random() * 1000);
      updatedList.push(taskWithMembers);
      toast.success("Task added successfully!", { position: 'top-right' });
    }

    setTaskList(updatedList);
    localStorage.setItem('taskdata', JSON.stringify(updatedList));

    setTask({});
    setMember([]);
    setIndex(-1);
  };

  const removeData = (id) => {
    const updatedList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedList);
    localStorage.setItem('taskdata', JSON.stringify(updatedList));
    toast.warn("Deleted", { position: 'bottom-right' });
  };

  const updateData = (id) => {
    const pos = taskList.findIndex((item) => item.id === id);
    if (pos !== -1) {
      setTask(taskList[pos]);
      setMember(taskList[pos].member);
      setIndex(pos);
    }
  };

  return (
    <div className="container">
      <h1>Localbox Miner</h1>

      <form className="task-form" onSubmit={submitData}>
        <div className="form-group ">
          <label style={{fontSize:"25px" ,paddingTop:"20px"}}>Enter Task:</label>
          <input style={{width:"60%",padding:"15px"}} type="text" placeholder='Enter your task' name="task" value={task.task || ""} onChange={getInputdata} required />
        </div>

        <div className="form-group">
          <label style={{fontSize:"25px",paddingTop:"20px" }}>Enter Type:</label>
          <input style={{width:"60%",padding:"15px"}} placeholder='Enter Type' type="text" name="type" value={task.type || ""} onChange={getInputdata} required/>
        </div>

        <div className="form-group">
          <label style={{fontSize:"25px" ,paddingTop:"20px"}} >Select Priority:</label>
          <div className="radio-group">
            <label style={{fontSize:"20px" ,paddingTop:"10px"}}>
              <input  type="radio" name="priority" value="urgent" onChange={getInputdata} checked={task.priority === 'urgent'}required/>
              Urgent
            </label  >
            <label style={{marginLeft:"30px", fontSize:"20px" ,paddingTop:"10px"}}>
              <input   type="radio" name="priority" value="overdue" onChange={getInputdata} checked={task.priority === 'overdue'} required/>
              Overdue
            </label>
          </div>
        </div>

        <div className="form-group">
          <label style={{fontSize:"25px" ,paddingTop:"20px"}}>Select Person:</label>
          <select name="person" onChange={getInputdata} value={task.person || ""}  style={{width:"60%",padding:"15px"}}>
            <option value="">--- Select Person ---</option>
            {person.map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label style={{fontSize:"25px" ,paddingTop:"20px"}}>Image URL:</label>
          <input style={{width:"60%", padding:"15px"}} placeholder='Enter Img URL' type="text" name="img" value={task.img || ""} onChange={getInputdata} required/>
        </div>

        <div className="form-group">
          <label style={{fontSize:"25px",paddingTop:"20px"}}>Select Team:</label>
          <div className="checkbox-group" style={{fontSize:"20px" ,fontFamily:"serif", paddingTop:"15px"}}>
            {["Urvi", "Dhrupal", "Broliii"].map((memberName, idx) => (
              <label key={idx} >
                <input 
                  type="checkbox"
                  name="member"
                  value={memberName}
                  checked={member.includes(memberName)}
                  onChange={getInputdata}
                />
                {memberName}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <button style={{width:"30%",padding:"15px" }}  type="submit">{index !== -1 ? "Update" : "Add"} </button>
        </div>
      </form>

      <div className="task-table">
        <h2>Localbox Miner</h2>
        {!loading ? (
          <p>Loading...</p>
        ) : taskList.length === 0 ? (
          <p style={{fontSize:"20px", fontFamily:"serif"}}>No records found...!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Image</th>
                <th>Type</th>
                <th>Priority</th>
                <th>Person</th>
                <th>Team </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((v, i) => (
                <tr key={v.id}>
                  <td>{i + 1}</td>
                  <td>{v.task}</td>
                  <td><img src={v.img} alt="Task" height={50} /></td>
                  <td>{v.type}</td>
                  <td>{v.priority}</td>
                  <td>{v.person}</td>
                  <td>{(v.member || []).join(", ")}</td>
                  <td>
                    <button className="btn btn-delete" onClick={() => removeData(v.id)}>Delete</button>
                    <button className="btn btn-update" onClick={() => updateData(v.id)}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
