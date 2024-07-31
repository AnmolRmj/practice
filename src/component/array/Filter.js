import React from "react";
export const Filter = () => {
  const data = [
    {
      name: "ram",
      id: 1,
      phone: 8312413,
      address: "ktm",
    },
    {
      name: "hari",
      id: 2,
      phone: 921498,
      address: "pkr",
    },
    {
      name: "gopal",
      id: 3,
      phone: 2194,
      address: "patan",
    },
    {
      name: "shyam",
      id: 4,
      phone: 21789,
      address: "htd",
    },
    {
      name: "ram",
      id: 5,
      phone: 8915,
      address: "ktm",
    },
    {
      name: "SIta",
      id: 6,
      phone: 8312413,
      address: "chitwan",
    },
  ];
  const [isData, setIsData] = React.useState();
  const filterdata = isData?.filter((item) => item.id === 5);
  console.log(
    "filter",
    isData?.filter((item) => item.id === 5)
  );
  const handleDelete=(id)=>{
    alert("Deleting Data")
    const deletedata=isData?.filter((item)=>item.id !==id)
    setIsData(deletedata);
  }
  React.useEffect(()=>{
    setIsData(data);
  },[])
  return (
    <div style={{display: "auto", justifyContent: "left", color: "red" }}>
      <div>Filter</div>
      <>
        <div>{filterdata?.[0]?.name}</div>
        <div>{filterdata?.[0]?.address}</div>
        <div>{filterdata?.[0]?.phone}</div>
      </>

      <div>
        {
          // data?.filter((item)=>item.id ===1)
          filterdata?.map((item, index) => (
            <div key={index + 1}>
              <div>Name:{item.name}</div>
              <div>Address:{item.address}</div>
              <div>Contact:{item.phone}</div>
            </div>
          ))
        }
      </div>
      <div  style={{ backgroundColor: "yellowgreen"}}>
        {isData?.map((item) => (
          <div key={item.id}>
            <div>Name:{item.name}</div>
            <div>Address:{item.address}</div>
            <div>Contact:{item.phone}</div>
            <button onClick={()=>handleDelete(item.id)}> Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
