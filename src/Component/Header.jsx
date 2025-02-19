const Header = ({ setSearchValue }) => {
  return (
    <div className=" flex flex-col  justify-center items-center bg-[#4075d5] py-6">
      <h1 className="text-white text-2xl font-bold">👑 Peoples of GOT</h1>
      <input
        type="text"
        placeholder="search the people of GOT"
        className="mt-5 rounded py-2 pl-3 pr-10 text-sm focus:border "
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Header;
