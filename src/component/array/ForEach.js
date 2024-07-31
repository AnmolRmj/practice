export const ForEach = () => {
  const data = [12, 12, 11, 10, 34, 45];
  const rawdata=[
    {value:"nepal", id:14},
    {value:"india", id:15},
    {value:"sri lanka", id:16},
    {value:"nepal", id:17},
    ];
 const convertdata=[
    {14:"usa"},
    {15:"uk"},
    {16:"russia"},
    
];
  let addeddata = [];
  data?.forEach((item) => {
    const afteradd = item + 2;

    return addeddata.push(afteradd);
  });
  console.log("adddata", addeddata);

  let convertrawdata=[]
  rawdata?.forEach((item)=>{
    convertrawdata[item.id]=item.value;
  })
  console.log("convertrawdata",convertrawdata)
  
  return (
    <div>
      For Each
      <div>
        {addeddata.map((addeddata, index) => {
          return (
            <div key={index}>
              <div>AddedData:{addeddata}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
