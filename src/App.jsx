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
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 mt-10">
        <div className="col-span-1 md:col-span-4 order-2 md:order-1">
          <CustomerProblem ticket={promise}></CustomerProblem>
        </div>
        <div className="px-2 order-1 md:order-2">
          <div className="mb-2">
            <h1 className="text-2xl font-bold">Task Status</h1>
            <p className="text-gray-500">
              Select a ticket to add to Task Status.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Resolved Task</h1>
            <p className="text-gray-500">No resolved tasks yet.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
