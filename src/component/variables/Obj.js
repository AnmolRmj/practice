const Obj=()=>{
    const info={
        name:"Anmol",
        address:"Thaha"
    }
    console.log("name",info);
    info.name="Hari"
    info.contact=9845795796
    delete info.address
    console.log('address',info.address);
    return(
        <>
        Name:{info.name}
        <br/>
        Address:{info.address}
        <br/>
        Contact:{info.contact}
        </>
    )
}
export default Obj;