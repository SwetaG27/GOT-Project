const Cards = ({ name, image, description }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col w-[23rem]">
      <div className="flex gap-5">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mb-3" />
        <h3 className="text-lg font-bold self-center">{name}</h3>
      </div>
      <p className="text-gray-800 font-semibold text-sm">{description}</p>

      <button className="mt-3 bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-200">
        Learn More!
      </button>
    </div>
  );
};

export default Cards;
