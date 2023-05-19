import React, { useState, useEffect } from "react";
export default function EditComponent({ formData, handleChange, UpdateUser }) {
  return (
    <div>
      <h3>Edit</h3>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={formData?.userName}
          onChange={(e) => handleChange(e, "userName")}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="text"
          value={formData?.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <br />
        <br />
        <label>password:</label>
        <input
          type="text"
          value={formData?.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <br />
        <br />
        <u
          onClick={() => {
            UpdateUser();
          }}
        >
          Update
        </u>
      </form>
    </div>
  );
}
