import { useNavigate } from "react-router-dom";
import PageNotFound from "../variables/PageNotFound";

export const Hook = () => {
  const data = [
    {
      name: "ram",
      roll: 1,
    },
    {
      name: "Shyam",
      roll: 2,
    },
    {
      name: "Ram",
      roll: 3,
    },
  ];
  const hookmethod = [
    {
      name: "UseEffect",
      roll: 1,
      path: "/useeffect",
    },
    {
      name: "Usestate",
      roll: 2,
      path: "/usestates",
    },
    {
      name: "Usecallback",
      roll: 3,
      path: "/usecallback",
    },
  ];

  console.log("data", data);
  console.log("name", data?.[0]); // '?.' fetches data,selects the desired and show results. it breaks the call when it doesnt receive data
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(item?.path);
  };

  return (
    <div
      style={{
        border: "1px",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        width: "400px",
      }}
    >
      {/* details={data?.[0]?.name} */}
      {/* Details:{data?.[1]?.name} */}
      {/* Map */}
      <br />
      {/* Roll:{data?.[1]?.roll} */}
      <div>
        {hookmethod?.map((item) => (
          <div key={item.roll} onClick={() => handleClick(item)}>
            <div>
              Name:
              <button style={{ color: "green", margin: "4px", padding: "1px" }}>
                {item.name}
              </button>
              
            </div>
          </div>
        ))}
        <div><PageNotFound/></div>
      </div>
      
    </div>
  );
};
