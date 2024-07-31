
import { useNavigate } from "react-router-dom";
import Let from "./Let";
import Var from "./Var";
import Const from "./Const";

function Variable(){
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate('/');
    }

    return(
        <div >
            < Var/>
            <Let/>
            <Const/>
            <button style={{display:'grid', justifyContent:'center'}}onClick={handleBack}>
                Back to home
            </button>
            </div>
    )
}
export default Variable;