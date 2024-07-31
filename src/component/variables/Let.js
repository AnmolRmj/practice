function Let() {
  let name = "Ram";
  {
    const name = "shyam";
    console.log("name", name);
  }
  console.log("letname", name);
  return <div>Let</div>;
}
export default Let;
