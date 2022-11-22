import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const DisplayStatistics = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => setGood(good + 1);
  const updateNeutral = () => setNeutral(neutral + 1);
  const updateBad = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={updateGood} text="good" />
      <Button onClick={updateNeutral} text="neutral" />
      <Button onClick={updateBad} text="bad" />

      <h2>statistics</h2>
      <DisplayStatistics text="good" value={good} />
      <DisplayStatistics text="neutral" value={neutral} />
      <DisplayStatistics text="bad" value={bad} />
    </>
  );
};

export default App;
