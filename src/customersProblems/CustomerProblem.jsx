import { use } from "react";
import { MdOutlineDateRange } from "react-icons/md";
const CustomerProblem = ({ ticket }) => {

  const ticketsData = use(ticket);
  console.log(ticket.value);
  return (
    
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>

      {
        ticketsData.map((customer) =>(
          <div>
        <div key={customer.id} className=" bg-white p-3 mb-5 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">
            {customer.title}
            </h1>
            <div className="border-2 px-3 py-1 font-semibold rounded-3xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-2xl bg-black"></span>
              <p>{customer.status}</p>
            </div>
          </div>
          <p className="mt-2 mb-2 text-gray-500">
          {customer.description}
          </p>

          <div className="flex justify-between">
            <div className="flex gap-3">
              <p className="font-semibold text-gray-500">{customer.id}</p>
              <p className="font-semibold text-gray-500">{customer.priority}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-3 text-gray-500">{customer.assignee}</p>
              <MdOutlineDateRange className="text-3xl text-gray-500" />
              <p className="text-gray-500">{customer.date}</p>
            </div>
          </div>
        </div>
      </div>
        ))
      }


      
    </div>
  );
};

export default CustomerProblem;
