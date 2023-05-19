import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function HomeComponent({ userList, deleteUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "flex-start",
      }}
    >
      <div>
        <h4>hello {location?.state?.id} welcome home</h4>
      </div>

      <table border={1}>
        <thead>
          <th>Name:</th>
          <th>Mail</th>
          <th>password</th>
          <th>Action</th>
        </thead>
        <tbody>
          {userList?.map((user, i) => {
            return (
              <tr>
                <td>{user?.userName}</td>
                <td>{user?.email}</td>
                <td>{user?.password}</td>

                <td>
                  <u
                    onClick={() => {
                      navigate("/edit", { state: { id: user?._id } });
                    }}
                  >
                    Edit
                  </u>
                  <br />
                  <u onClick={() => deleteUser(user?._id)}>Delete</u>
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
