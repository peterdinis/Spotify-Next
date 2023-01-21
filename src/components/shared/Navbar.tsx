import { useStateProvider } from "../../redux/state";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavbarContainer } from "@/styles/Component.styled";

const Navbar: React.FC = ({ navBackground }: any) => {
  const [{ userInfo }] = useStateProvider();

  return (
    <NavbarContainer>
      <div className="search__bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
      <div className="avatar">
        <a href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
