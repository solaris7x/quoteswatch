import Link from "next/link";

import Cform from "../components/contribute/Cform";

export default function Contribute() {
  return (
    <div>
      <nav className="bg-material-red text-white">
        <div className="p-4 font-bold uppercase text-xl">
          <Link href="/">
            <a>QuotesWatch</a>
          </Link>
        </div>
      </nav>
      <div className="px-6 md:px-32 bg-material-dark text-white h-screen">
        <div className="pt-6">
          <span className="text-3xl">Contribute</span>
        </div>
        <div className="mt-4">
          <Cform />
        </div>
      </div>
    </div>
  );
}
