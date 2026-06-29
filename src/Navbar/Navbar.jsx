const Navbar = () => {
  return (
    <div className="bg-[ghostwhite]">
      {/* navbar design */}
      <div className="navbar w-11/12 mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex mb-7 md:mb-0">
          <a className="text-2xl font-bold">CS — Ticket System</a>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>
          </div>

          <button className="flex items-center border-0 rounded-lg px-4 py-2 btn-gradient text-white">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
