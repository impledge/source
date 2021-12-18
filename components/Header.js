import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-white lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="#">
              <a
                href=""
                className="inline-block bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-green-400"
              >
                Documentation
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
