import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import TimerContainer from "./containers/Timer";
import Home from "./components/Home/";
import Characters from "./components/Characters/";
// import CharacterList, { Character } from "./CharacterList";
// import Counter from "./Counter";
// import Timer from "./Timer";
// import { Counter as HookCounter } from "./HookCounter";
// import { Timer as HookTimer } from "./HookTimer";
import Counter from "./containers/Counter";
import ColorfulBeads from "./containers/ColorfulBeads";

const App: FC<{}> = () => (
  <div className="container">
    <Counter />
    <ColorfulBeads />
  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <header>
//           <h1>はねバド</h1>
//         </header>
//         {/* <CharacterList school="北小町高校" characters={characters} /> */}
//         <CharacterList school="" characters={characters} />
//         <Counter />
//         {/* <Timer /> */}
//         {/* <HookCounter /> */}
//         {/* <HookTimer /> */}
//         <TimerContainer />
//       </div>
//     );
//   }
// }

export default App;
