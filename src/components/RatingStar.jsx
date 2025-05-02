import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa6";

const RatingStar = ({ rating }) => {
  const rounded = Math.round(rating * 2) / 2;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rounded >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rounded >= i - 0.5) {
      stars.push(<FaStarHalf key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return <span className="flex gap-1 text-sm">{stars}</span>;
};

export default RatingStar;
