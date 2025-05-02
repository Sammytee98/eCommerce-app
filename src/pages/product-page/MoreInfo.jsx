import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";

const MoreInfo = () => {
  return (
    <article className="w-full mt-10">
      <Description />
      <AdditionalInfo />
      <Review />
    </article>
  );
};

export default MoreInfo;
