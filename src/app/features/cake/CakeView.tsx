// import { useSelector,useDispatch } from "react-redux";
// import { ordered,restocked } from "./cakeSlice";

// function CakeView(props) {


//     const numOfCakesss=useSelector(state=>state.cake.numOfCakes)
//     const dispatch=useDispatch()
//     return (
//         <div>
//             <h2>number of cakes-{numOfCakesss}</h2>
//             <button onClick={()=>dispatch(ordered())}> Order cakes</button>
//             <button onClick={()=>dispatch(restocked(3))}>Restock cakes</button>
//         </div>
//     );
// }

// export default CakeView;
'use client'
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { RootState, AppDispatch } from "../../store"; // Update this path based on your actual Redux setup

interface CakeViewProps {
  // Define props if needed
}

const CakeView: React.FC<CakeViewProps> = (props) => {
  const numOfCakesss = useSelector((state: RootState) => state.cake.numOfCakes);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h2>number of cakes-{numOfCakesss}</h2>
      <button onClick={() => dispatch(ordered())}> Order cakes</button>
      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;