import Player from "./Player";

const BottomBar: React.FC = () => {
  return (
    <>
      <div className="h-24 bg-footer border-t border-white border-opacity-5 p-4">
        <Player />
      </div>
    </>
  );
};

export default BottomBar;
