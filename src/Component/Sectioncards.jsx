import Cards from "./cards";

const Sectioncards = ({ details }) => {
  if (!details) return null;

  return (
    <div className="flex flex-wrap gap-10 justify-center mt-10">
      <Cards
        key={details.name}
        name={details.name}
        image={details.image}
        description={details.description}
      />
    </div>
  );
};

export default Sectioncards;
