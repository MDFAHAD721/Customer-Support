import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import CustomerProblem from "./customersProblems/CustomerProblem";

const ticket = async () => {
  const res = await fetch("/customersData.json");
  return res.json();
};

const promise = ticket();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="w-11/12 mx-auto grid grid-cols-2 ">
        <div className="border-2">
          <CustomerProblem ticket={promise}></CustomerProblem>
        </div>
        <div className="border-2">
          <div>
            <h1 className="text-2xl font-bold">Task Status</h1>
            <p>Select a ticket to add to Task Status.</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Resolved Task</h1>
            <p>No resolved tasks yet.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
