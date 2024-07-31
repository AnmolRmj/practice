function Var(){
    var name="xyz";
    var address ="KTM";
    {
        var name="abc";
    }
    
    
    const handleVar=()=>{
        var address="Pokhara";
        alert("oops");
        console.log("name",name,address);
    }
    
    return(
        <div style={{display:'grid', justifyContent:'center', gap:'4px'}}onClick={handleVar}>
            Var
            <div>{name}</div>
            <div>{address}</div>
            
        </div>
    )
}
export default Var;