import axios from "axios";
import { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setusers] = useState([]);

  const getusers = async () => {
    try {
      const { data } = await axios.get(API);
      setusers(data);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <div className="container">
      <div className="d-flex my-5 justify-content-between">
        <a href="/">
          <button type="button" className="btn btn-outline-primary">
            Back
          </button>
        </a>
        <h1>users List</h1>
        <div />
      </div>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark text-center">
            <th>Nomor</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((comment) => (
            <tr key={comment.id} className="table-secondary text-center">
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;