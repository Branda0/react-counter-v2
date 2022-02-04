const Counter = ({ index, setCounters, counters, counter }) => {
  const increment = () => {
    const newCounters = [...counters];
    newCounters[index] = counter + 1;
    setCounters(newCounters);
  };

  const decrement = () => {
    const newCounters = [...counters];
    newCounters[index] = counter - 1;
    setCounters(newCounters);
  };

  const reset = () => {
    const newCounters = [...counters];
    newCounters[index] = 0;
    setCounters(newCounters);
  };

  return (
    <div className="counter-container">
      <div className="counter-top">
        <div className="change-container">
          {counter > 0 && <button className="btn-less" onClick={decrement}></button>}
        </div>
        <div className="result-container">
          <p>{counter}</p>
        </div>
        <div className="change-container">
          {counter < 10 && <button className="btn-plus" onClick={increment}></button>}
        </div>
      </div>
      <div className="counter-reset">
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
