export default function Nav() {
  return (
    <nav className="md:flex md:justify-center md:items-center bg-material-red text-white">
      <div className="md:text-right p-4">
        <div className="font-bold uppercase text-xl md:text-5xl md:border-b border-gray-100">
          QuotesWatch
        </div>
        <pre className="hidden md:block">
          - All the ingame persona we will <br /> never forget!
        </pre>
      </div>
    </nav>
  );
}
