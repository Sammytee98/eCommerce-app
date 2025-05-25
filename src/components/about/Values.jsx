import values from "../../data/valueData";

const Values = () => {
  return (
    <section className="space-y-10 py-16 px-6">
      <h3 className="text-2xl tablet:text-3xl text-center font-bold">
        Why Shop with Us
      </h3>

      <div className="w-full px-5 py-5 grid mobile:grid-cols-2 laptop:grid-cols-4 place-items-center gap-8">
        {values.map((value) => {
          const { id, icon: FaIcon, title, content } = value;

          return (
            <div
              key={id}
              className="px-2 py-5 max-w-80 text-center space-y-2 bg-white rounded-md shadow-cs flex flex-col items-center"
            >
              <FaIcon className="text-3xl tablet:text-4xl text-orange-500" />
              <h4 className="text-xl tablet:text-2xl font-medium">{title}</h4>
              <p className="text-base tablet:text-lg">{content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
