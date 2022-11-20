const Footer = (props) => {
  return (
    <div>
      <p>Hello {props.name || "Guest"}</p>
    </div>
  );
}

function App() {
  const name = "mashenka7";
  return (
    <>
      <p>Greetings</p>
      <Footer />
    </>
  );
}

export default App;
