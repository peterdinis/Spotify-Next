import AddHomeIcon from "@mui/icons-material/AddHome";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SearchIcon from '@mui/icons-material/Search';

const Sidebar: React.FC = () => {
  return (
    <div className="text-gray-600">
      <div className="flex items-center">
        <button className="space-x-2 hover:text-white">
          <AddHomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryAddIcon className="h-5 w-5" />
          <p>Your library</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
