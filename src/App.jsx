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

  const allPeople = houses.flatMap((house) =>
    house.people.map((person) => ({
      ...person,
      houseName: house.name,
    }))
  );

  const filteredPeople = searchValue
    ? allPeople.filter((person) =>
        person.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : allPeople;

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
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => (
            <Sectioncards key={person.name} details={person} />
          ))
        ) : (
          <p className="text-gray-600 text-2xl font-semibold">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
