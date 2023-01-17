import Link from "next/link";

const Filters: React.FC = () => {
  return (
    <nav className="mr-auto ml-4 relative">
      <ul className="flex gap-x-4">
        <li>
          <Link className={" p-3 rounded"} href={"/collection"}>
            <button className="font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide">
              Link 1
            </button>
          </Link>
        </li>
        <li>
          <Link className={"p-3 rounded"} href={"/collection/podcasts"}>
            <button className="font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide">
            Link 2
            </button>
          </Link>
        </li>
        <li>
          <Link className={"p-3 rounded"} href={"/collection/sanatciler"}>
            <button className="font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide">
            Link 3
            </button>
          </Link>
        </li>
        <li>
          <Link className={"p-3 rounded"} href={"/collection/albumler"}>
            <button className="font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide">
            Link 4
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Filters;
