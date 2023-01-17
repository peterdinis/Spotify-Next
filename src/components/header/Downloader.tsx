import Icon from "../shared/Icons";

const Downloader: React.FC = () => {
  return (
    <div>
      <a
        className="flex gap-x-4 py-2 text-link hover:text-white transition-colors items-center"
        href="#"
      >
        <span>
          <Icon name="menudownload" />
        </span>
        <span className="text-sm font-bold">Download</span>
      </a>
    </div>
  );
};

export default Downloader;
