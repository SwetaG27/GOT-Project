import Cards from "./cards";

const Sectioncards = ({ details }) => {
  return (
    <div className="flex flex-wrap m-3 justify-center ">
      <Cards
        name={details.name}
        image={details.image}
        description={details.description}
      />
    </div>
  );
};

export default Sectioncards;
