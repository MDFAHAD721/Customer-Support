import { use } from "react";
import { MdOutlineDateRange } from "react-icons/md";
const CustomerProblem = ({ ticket }) => {
  const ticketsData = use(ticket);
  console.log(ticket.value);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ticketsData.map((customer) => (
          <div>
            <div
              key={customer.id}
              className=" bg-white p-3 rounded-xl shadow-md flex flex-col justify-between gap-5 h-full"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold flex-1">
                  {customer.title}
                </h1>
                <div
                  className={`px-3 py-1 font-semibold rounded-3xl flex items-center gap-2 
              ${customer.status === "Open" ? "open-green-bg" : "progress-bg"}
              `}
                >
                  <span
                    className={`w-3 h-3 rounded-2xl ${customer.status === "Open" ? "open-dot-green" : "progress-dot"}`}
                  ></span>
                  <p
                    className={
                      customer.status === "Open"
                        ? "open-green"
                        : "progress-font"
                    }
                  >
                    {customer.status}
                  </p>
                </div>
              </div>
              <p className="text-gray-500">{customer.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-gray-500">{customer.id}</p>
                  <p
                    className={`font-semibold ${customer.priority === "LOW PRIORITY" ? "text-[#02a53b]" : customer.priority === "MEDIUM PRIORITY" ? "text-[#febb0c]" : "text-[#ff0000]"}`}
                  >
                    {customer.priority}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-3 text-gray-500">{customer.assignee}</p>
                  <MdOutlineDateRange className="text-3xl text-gray-500" />
                  <p className="text-gray-500">{customer.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerProblem;
