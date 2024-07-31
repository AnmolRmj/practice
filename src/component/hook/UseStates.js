import React, { useState } from "react";
import PageNotFound from "../variables/PageNotFound";
const UseStates = () => {
  const [upCount, setUpCount] = useState(0);
  const [downcount, setdowncount] = useState(20);
  const [multi, setMulti] = useState({
    multi: 1,
    upcount: 1,
    num: 2,
  });

  console.log("value", upCount);
  const handleupcount = () => {
    setUpCount(upCount + 1);
  };
  const handledowncount = () => {
    if (downcount > 0) {
      setdowncount(downcount - 1);
    }
  };
  const handleMulti = () => {
    if (multi.upcount <= 10) {
      setMulti({
        ...multi,
        multi: multi.num * multi.upcount,
        upcount: multi.upcount + 1,
      });
    }
  };

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <div>Use State</div>
      <div>Counter up:{upCount}</div>
      <button
        onClick={handleupcount}
        style={{ color: "green", display: "auto" }}
      >
        Add
      </button>
      <div>Counter Down:{downcount}</div>
      <button
        onClick={handledowncount}
        style={{ color: "green", display: "auto" }}
      >
        Sub
      </button>
      <div>Counter Multi:{multi?.multi}</div>
      <button onClick={handleMulti} style={{ color: "green" }}>
        Multi
      </button>

      <div>
        <PageNotFound />
      </div>
    </div>
  );
};
export default UseStates;
