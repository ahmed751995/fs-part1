import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StaticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;
  if (all === 0) {
    return <p>no feedback given</p>;
  }
  return (
      <table>
        <tbody>
          <StaticLine text="good" value={good} />
          <StaticLine text="neutral" value={neutral} />
          <StaticLine text="bad" value={bad} />
          <StaticLine text="all" value={all} />
          <StaticLine text="average" value={average} />
          <StaticLine text="positive" value={positive + " %"} />
        </tbody>
    </table>
  );
};

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
      <div>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

export default App;
