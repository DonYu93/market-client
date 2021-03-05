import React from 'react';

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log('Updated Component!');
  function updateTime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>

      <button onClick={updateTime}>Increase 1</button>
    </div>
  );
}

export default TimerComponent;
