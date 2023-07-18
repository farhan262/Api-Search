import "./styles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Filter = (event) => {
    setRecords(
      data.filter((f) => f.title.toLowerCase().includes(event.target.value))
    );
  };
  return (
    <div className="App">
      <input type="text" placeholder="find..." onChange={Filter} />
      <button>search </button>
      <table>
        <thead>
          <tr>
            <th> id</th>
            <th> title</th>
            <th> body</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td> {d.id}</td>
              <td> {d.title}</td>
              <td> {d.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
