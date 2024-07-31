import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./ContextApi";

const Home = () => {
  const {appState}=useAppContext()
  console.log('appState',appState)
  const data = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Variable",
      path: "/variable",
    },
    {
      name: "Object",
      path: "/object",
    },
    {
      name: "Array",
      path: "/array",
    },
    {
      name: "Hook",
      path: "/hook",
    },
    {
      name: "HOC",
      path: "/hoc",
    },
    {
      name: "Context",
      path: "/context",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
      {data?.map((item) => (
        <div key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default Home;
