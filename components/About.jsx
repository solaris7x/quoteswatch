import Link from "next/link";

export default function About() {
  return (
    <div className="bg-material-dark text-white">
      <div className="mx-8 py-6">
        <div className="text-xl">About Stuff</div>
        <div className="py-4">
          This site is inspired by the random character quotes on crackwatch
          loading page, All images and dialouges belong to their respective
          creators.
        </div>
        <div className="text-xl">
          <Link href="/contribute">
            <a>Contribute</a>
          </Link>
        </div>

        <div className="py-4">Under Construction...</div>
      </div>
    </div>
  );
}
