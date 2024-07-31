import { useNavigate } from "react-router-dom";

export const Array = () => {
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
  const arraymethod = [
    {
      name: "Map",
      roll: 1,
      path: "/map",
    },
    {
      name: "Filter",
      roll: 2,
      path: "/filter",
    },
    {
      name: "Reduce",
      roll: 3,
      path: "/reduce",
    },
    {
      name: "For Each",
      roll: 4,
      path: "/foreach",
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
        {arraymethod?.map((item) => (
          <div key={item.roll} onClick={() => handleClick(item)}>
            <div>
              Name:
              <button style={{ color: "green", margin: "4px", padding: "1px" }}>
                {item.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
