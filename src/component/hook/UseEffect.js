import PageNotFound from "../variables/PageNotFound";
import React from "react";

export const UseEffect = () => {
  const [upCount, setUpCount] = React.useState(0);
  const [isUp, SetIsUp] = React.useState(false);
  console.log("value", upCount);
  const handleupcount = () => {
    SetIsUp(!isUp);
  };
  React.useEffect(() => {
    setUpCount(upCount + 1);
    console.log("useeffect");
    }, [isUp]); // eslint-disable-line react-hooks/exhaustive-deps
  
  console.log("component");
  

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      UseEffect
      <div>UpCount:{upCount}</div>
      <div>
        <div>Counter up:{upCount}</div>
        <button
          onClick={handleupcount}
          style={{ color: "green", display: "auto" }}
        >
          Add
        </button>
      </div>
      <div>
        <PageNotFound />
      </div>
    </div>
  );
};
