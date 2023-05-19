import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiHandler } from "../constants/ApiHandler";
import EditComponent from "../components/EditComponent";
export default function EditContainer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await ApiHandler.getUser(location.state.id);
        let formData = {};
        formData["email"] = response?.[0]?.email;
        formData["password"] = response?.[0]?.password;
        formData["userName"] = response?.[0]?.userName;
        setFormData(formData);
      } catch (error) {
        throw error;
      }
    })();
  }, [location.state.id]);

  const handleChange = (e, type) => {
    let formData1 = { ...formData };
    formData1[type] = e.target.value;
    setFormData(formData1);
  };
  const UpdateUser = async () => {
    try {
      const response = await ApiHandler.updateUser(location.state.id, formData);
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <EditComponent
      formData={formData}
      handleChange={handleChange}
      UpdateUser={UpdateUser}
    />
  );
}
