"use client";

import React from "react";
import { useState } from "react";
import { useReducer } from "react";

// Updates two or more things to display without refreshing

// The following is written using useState

// export default function page() {

//     const [counter, setCounter] = useState(0)
//     const [showtext, setshowtext] = useState(true)

//     const increment = () => {
//         setCounter(counter + 1)
//         setshowtext(!showtext)
//     }

//   return (
//     <main className='flex gap-10'>

//         <div>{counter}</div>

//         <button
//         onClick={increment}
//         className='bg-slate-500 px-5 py-3 rounded-3xl'>Increase The count</button>

//         {showtext && <p> Text</p>}

//     </main>
//   )
// }

// The following program is written using useReducer

// const Page = () => {

//   interface State {
//     counter: number;
//     showtext: boolean;
//   }

//   interface Action {
//     type: string;
//   }

//   const reducer = (state: State, action: Action): State => {
//     switch (action.type) {
//       case "Increment":
//         return { counter: state.counter + 1, showtext: state.showtext };
//       case "ToggleText":
//         return { counter: state.counter, showtext: !state.showtext };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { counter: 0, showtext: true });

//   return (
//     <main className="flex gap-10">
//       <div>{state.counter}</div>

//       <button
//         onClick={() => {
//           dispatch({ type: "Increment" });
//           dispatch({ type: "ToggleText" });
//         }}
//         className="bg-slate-500 px-5 py-3 rounded-3xl"
//       >
//         Increase The count
//       </button>

//       {state.showtext && <p>Text</p>}
//     </main>
//   );
// };

// export default Page;

//Another Example

const Page = () => {

  interface InitialState {
    bgColor: string
  }

  const inititalState: InitialState = {bgColor : "#fff"}
  
  interface State {
    bgColor: string
  }

  interface Action {
    type: string;
  }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "black":
        return { bgColor: "#000" };
      case "red":
        return { bgColor: "red" };
      default:
        return {bgColor: "initial"};
    }
  };

  const [state, dispatch] = useReducer(reducer, inititalState)
  return (
    <main className="flex gap-10">
      <div className={`bgColor: state.bgColor`}>Hello Reducer</div>
      <button onClick={() => dispatch({type: "red"})}>Turn to red</button>
      <button onClick={() => dispatch({type: "#000"})}>Turn to red</button>
    </main>
  );
};

export default Page;
