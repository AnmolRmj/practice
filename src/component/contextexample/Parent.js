import React from "react";
import { Child } from "./Child";
import { useAppContext } from "../ContextApi";

const Parent = () => {
  const { appState, updateState } = useAppContext();
  console.log('appstate', appState);
  const data = {
    name: "parent",
    id: 1,
  };
  const arraydata =[
    {
      name: "sir",
      id: 1,
    },
    {
      name: "miss",
      id: 2,
    },
    {
      name: "madam",
      id: 3,
    },
  ];
  React.useEffect(() => {
    updateState({ ...appState, data: data, arraydata:arraydata })},[]);
  return (
    <div>
      <div>Parent</div>
      <div>name:{data?.name}</div>

      <div>
        <Child data={data} />
      </div>
    </div>
  );
};

export default Parent;
