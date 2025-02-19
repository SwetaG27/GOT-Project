import { useState } from "react";
import Header from "./Component/Header";
import Sectionbar from "./Component/Sectionbar";
import Sectioncards from "./Component/Sectioncards";
import mockdata from "./utils/mockdata";

const App = () => {
  const [houses] = useState(mockdata.houses);
  const [searchValue, setSearchValue] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleHouseClick = (houseName) => {
    setSelectedHouse(selectedHouse === houseName ? null : houseName);
  };

  const filteredHouses = houses.map((house) => ({
    ...house,
    people: house.people.filter((person) =>
      person.name.toLowerCase().includes(searchValue.toLowerCase())
    ),
  }));

  const displayedHouses = selectedHouse
    ? filteredHouses.filter((house) => house.name === selectedHouse)
    : filteredHouses;

  const hasResults = displayedHouses.some((house) => house.people.length > 0);

  return (
    <div>
      <Header setSearchValue={setSearchValue} />

      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {houses.map((data) => (
          <Sectionbar
            key={data.name}
            personData={data.name}
            onClick={() => handleHouseClick(data.name)}
            isActive={selectedHouse === data.name}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {searchValue || selectedHouse ? (
          hasResults ? (
            displayedHouses.map((data) => (
              <Sectioncards key={data.name} details={data} />
            ))
          ) : (
            <p className="text-gray-600 text-2xl font-semibold">
              No results found.
            </p>
          )
        ) : (
          houses.map((data) => <Sectioncards key={data.name} details={data} />)
        )}
      </div>
    </div>
  );
};

export default App;
