import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../component/Home";
import Variable from "../component/variables/Variable";
import Obj from "../component/variables/Obj";
import { Array } from "../component/array/Array";
import { Filter } from "../component/array/Filter";
import { Reduce } from "../component/array/Reduce";
import { ForEach } from "../component/array/ForEach";
import { Map } from "../component/array/Map";
import { Hook } from "../component/hook/Hook";
import { UseEffect } from "../component/hook/UseEffect";
import Usecallbacks from "../component/hook/Usecallback";
import UseStates from "../component/hook/UseStates";
import PageNotFound from "../component/variables/PageNotFound";
import HOC from "../component/hoc/Hoc";
import Parent from "../component/contextexample/Parent";
import { Profile } from "../component/Profile";




export const MainRoute=createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route path="/" element={<Home/>}/>
           <Route path="/variable" element={<Variable/>}/>
           <Route path="/Array" element={<Array/>}/>
           <Route path="/object" element={<Obj/>}/>
           <Route path="/filter" element={<Filter/>}/>
           <Route path="/foreach" element={<ForEach/>}/>
           <Route path="/reduce" element={<Reduce/>}/> 
           <Route path="/map" element={<Map/>}/>
           <Route path="/hook" element={<Hook/>}/>
           <Route path="/useeffect" element={<UseEffect/>}/>
           <Route path="/usestates" element={<UseStates/>}/>
           <Route path="/usecallback" element={<Usecallbacks/>}/>
           <Route path="/pagenotfound" element={<PageNotFound/>}/>
           <Route path="/hoc" element={<HOC/>}/>
           <Route path="/context" element={<Parent/>}/>
           <Route path="/profile" element={<Profile/>}/>
           

        </Route>
    )
)
