import React, { useState } from "react";
import "./App.css";
import icon from "./icon.png";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [inputCategory, setInputCategory] = useState("");

  const [inputDate, setInputDate] = useState("");

  const [list, setList] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();

    let Data = {
      value: inputValue,
      category: inputCategory,
      date: inputDate,
    };

    if (inputValue && inputCategory && inputDate) {
      setList([...list, Data]);
    } else {
      alert("Add a task");
    }
    setInputValue("");
    setInputCategory("");
    setInputDate("");
  };

  const deleteTask = (id) => {
    const updateList = list.filter((newlist, num) => {
      return id !== num;
    });
    setList(updateList);
  };

  const editTask = (id) => {
    const updateList = list.filter((newlist, num) => {
      return id !== num;
    });

    const editedUser = list.find((u) => u === id);
    setList(updateList);
    setInputValue(editedUser.value);
    setInputCategory(editedUser.Category);
  };

  const handleDeleteAll = () => {
    setList([]);
  };

  return (
    <>
      <div className="container">
        <div className="inputs-box">
          <h1 className="title">To Do List</h1>
          <h3 id="addtask">Add a task</h3>
          <div className="input-fields">
            <input
              type="text"
              value={inputValue}
              className="input-field"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <h3>Add Category</h3>
            <input
              type="text"
              className="input-category"
              value={inputCategory}
              onChange={(e) => setInputCategory(e.target.value)}
            />
            <h3>Set Deadline:</h3>
            <input
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleClick} className="createtask">
            Create task
          </button>
        </div>

        {/* display-part */}
        <div className="display-container">
          <div className="main-box">
            <h1 className="title1">My task</h1>
            <div className="row">
              {list.map((a, id) => (
                <ul key={id}>
                  <li>
                    <div className="note-heading">
                      <h3 className="note-category">{a.category}</h3>
                      <h4 className="note-date">{a.date}</h4>
                    </div>
                    <h3 className="note-value">{a.value}</h3>
                    <div className="edit">
                      <button onClick={() => editTask(id)}>Edit</button>
                    </div>
                    <div className="delete">
                      <img
                        src={icon}
                        onClick={() => deleteTask(id)}
                        alt="delete"
                      ></img>
                    </div>
                    <div className="status">
                      <label for="status" id="label">
                        Status:
                      </label>
                      <select id="item1" className="status-option" name="item1">
                        <option value="1">Incompleted</option>
                        <option value="2" id="completed">
                          Completed
                        </option>
                      </select>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div>
            {list.length >= 1 && (
              <button className="alldelete" onClick={handleDeleteAll}>
                Delete All
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
