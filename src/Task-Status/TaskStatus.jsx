import { toast } from "react-toastify";
const TaskStatus = ({
  selectedTicket,
  setResolvedCard,
  resolvedTicket,
  setResolvedTicket,
  setInProgressCount,
  setSelectedTicket,
  setRemovedTicket,
}) => {
  const handleComplete = (ticket) => {
    setResolvedCard((prev) => prev + 1);

    setInProgressCount((prevCount) => prevCount - 1);
    setResolvedTicket((prev) => [...prev, ticket]);
    setRemovedTicket((prev) => [...prev, ticket.id]);

    setSelectedTicket((prevTicket) =>
      prevTicket.filter((item) => item.id !== ticket.id),
    );
    toast(`"${ticket.title}" has been marked as completed!`);
  };

  return (
    <div>
      <div className="mb-2">
        <h1 className="text-2xl font-bold">Task Status</h1>

        {selectedTicket.length > 0 ? (
          selectedTicket.map((ticket) => (
            <div className="bg-white p-3 rounded-xl shadow-md gap-3 mt-4">
              <h1 className="text-xl font-semibold">{ticket.title}</h1>
              <button
                onClick={() => handleComplete(ticket)}
                className="btn w-full rounded-lg mt-3 text-white bg-[#02a53b] hover:bg-[#b9f8cf] hover:text-black"
              >
                Complete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            Select a ticket to add to Task Status.
          </p>
        )}
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-bold">Resolved Task</h1>
        {resolvedTicket.length > 0 ? (
          resolvedTicket.map((ticket) => (
            <div key={ticket.id} className="bg-[#E0E7FF] mt-3 rounded-lg p-3">
              <h1 className="text-xl font-semibold">{ticket.title}</h1>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
