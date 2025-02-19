import Cards from "./cards";

const Sectioncards = ({ details }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-10">
      <Cards
        name={details.name}
        image={details.image}
        description={details.description}
      />
    </div>
  );
};

export default Sectioncards;
