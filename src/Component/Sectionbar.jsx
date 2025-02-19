const Sectionbar = ({ personData, onClick, isActive }) => {
  return (
    <button
      className={`border-[#4075d5] bg-[#4075d5] px-3 py-1 font-bold rounded text-white cursor-pointer 
        ${
          isActive
            ? "bg-white text-[#2560ce] border border-[#4075d5]"
            : "hover:bg-white hover:text-[#4075d5] hover:border hover:border-[#4075d5]"
        }`}
      onClick={onClick}
    >
      {personData}
    </button>
  );
};

export default Sectionbar;
