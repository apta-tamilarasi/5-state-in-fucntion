import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
// import About from "./Component/About/About";

import { globalState } from './Component/Context/Context.js'
import { initialState,Reducer } from "./Component/Context/Reducer.js";
// import Componentdid from "./Lifecycle/Componentdid.js";
import Useeffectparent from "./Lifecycle/Useeffectparent.js";

const Routing = () => {

    let [state,dispatch]=useReducer(Reducer,initialState)
    console.log(state)
    console.log(dispatch)
    return (


        <globalState.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Routes>
                   {/* <Route path="/" element={<Componentdid/>}/> */}
                   <Route path="/" element={<Useeffectparent/>}/>
                    
                </Routes>
            </BrowserRouter>
        </globalState.Provider>
    )
}

export default Routing