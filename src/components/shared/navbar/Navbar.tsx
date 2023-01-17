import Icon from "../Icons";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <button className="bg-brenk p-[6px] rounded-full items-center mr-3">
        <Icon name="back" />
      </button>
      <button className="bg-brenk p-[6px] rounded-full items-center mr-2">
        <Icon name="next" />
      </button>
    </>
  );
};

export default Navbar;
