import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import CustomerProblem from "./customersProblems/CustomerProblem";
import TaskStatus from "./Task-Status/TaskStatus";

const ticket = async () => {
  const res = await fetch("/customersData.json");
  return res.json();
};

const promise = ticket();

function App() {
  const [resolvedCard, setResolvedCard] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [clickedCard, setClickedCard] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedTicket, setResolvedTicket] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Hero
        inProgressCount={inProgressCount}
        resolvedCard={resolvedCard}
      ></Hero>
      {/* 1st part */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 mt-10">
        <div className="col-span-1 md:col-span-4 order-2 md:order-1">
          <CustomerProblem
            ticket={promise}
            setInProgressCount={setInProgressCount}
            clickedCard={clickedCard}
            setClickedCard={setClickedCard}
            setSelectedTicket={setSelectedTicket}
          ></CustomerProblem>
        </div>
        {/* 2nd part */}
        <div className="px-2 order-1 md:order-2 ">
          <TaskStatus
            selectedTicket={selectedTicket}
            setResolvedCard={setResolvedCard}
            resolvedTicket={resolvedTicket}
            setResolvedTicket={setResolvedTicket}
            setInProgressCount={setInProgressCount}
            setSelectedTicket={setSelectedTicket}
          ></TaskStatus>
        </div>
      </div>
    </>
  );
}

export default App;
