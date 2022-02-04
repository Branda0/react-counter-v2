import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const [counters, setCounters] = useState([0]);
  console.log(counters);

  const addCounter = () => {
    const newCounters = [...counters];
    newCounters.push(0);
    setCounters(newCounters);
  };

  return (
    <div className="app-container">
      {/* <Header /> */}
      <button className="add" onClick={addCounter}>
        Add counter
      </button>
      <div className="counters-container">
        {counters.map((elem, index) => {
          return (
            <Counter key={index} index={index} counter={elem} counters={counters} setCounters={setCounters} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
