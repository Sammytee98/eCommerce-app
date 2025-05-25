import Workspace from "../../assets/about/workspace.jpg";

const Story = () => {
  return (
    <section className="py-16 px-6 tablet:px-10 laptop:px-20 space-y-10">
      <h3 className="text-2xl tablet:text-3xl text-center font-bold">
        Where Simplicity Meets Selection
      </h3>

      <div className="w-full flex flex-col tablet:flex-row tablet:items-center gap-4">
        <img
          src={Workspace}
          alt="Workspace Picture"
          className="h-68 tablet:order-1 tablet:h-52 tablet:w-1/2"
        />
        <p className="text-base tablet:text-lg tablet:w-1/2 tracking-wide">
          GTS was founded on one simple idea &mdash; making high-quality
          essentials accessible to everyone. We bring together a thoughtful mix
          of tech, beauty, and clothings, curatedd to meet your lifestyle needs.
          Whether you're upgrading your workspace, enhancing your fashion, GTS
          is your one-stop destination for value and style.
        </p>
      </div>
    </section>
  );
};

export default Story;
