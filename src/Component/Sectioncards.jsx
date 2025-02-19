import Cards from "./cards";

const Sectioncards = ({ details }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-10">
      {details.people?.map((person, index) => (
        <Cards
          key={index}
          name={person.name}
          image={person.image}
          description={person.description}
        />
      ))}
    </div>
  );
};

export default Sectioncards;
