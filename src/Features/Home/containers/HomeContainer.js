import React, { useState, useEffect } from "react";
import { ApiHandler } from "../constants/ApiHandler";
import HomeComponent from "../components/HomeComponents";

export default function HomeContainer() {
  const [userList, setUserList] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await ApiHandler.getAllUser();
      setUserList(response);
    })();
  }, [refresh]);
  const deleteUser = async (userId) => {
    try {
      console.log("1");
      const response = await ApiHandler.deleteUser(userId);
      setRefresh(!refresh);
    } catch (error) {
      alert("error");
    }
  };

  return <HomeComponent userList={userList} deleteUser={deleteUser} />;
}
