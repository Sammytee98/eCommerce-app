import { FaCircleCheck } from "react-icons/fa6";

const SuccessIcon = () => {
  return (
    <div className="rounded-full p-3 bg-green-100">
      <div className="rounded-full p-3 bg-green-200">
        <FaCircleCheck className="w-16 h-16 text-green-600 bg-green-300 p-3 rounded-full" />
      </div>
    </div>
  );
};

export default SuccessIcon;
