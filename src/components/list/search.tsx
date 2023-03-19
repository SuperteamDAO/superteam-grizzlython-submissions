type SearchProps = {
  setFilteredResponses: any;
};

const Search = ({ setFilteredResponses }: SearchProps) => {
  console.log(
    'file: search.tsx:6 ~ Search ~ setFilteredResponses:',
    setFilteredResponses
  );
  return (
    <div className="flex items-center justify-between pt-8 pb-4">
      <div className="relative mt-2 rounded-md shadow-md shadow-zinc-800/5">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-zinc-500"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="input"
          className="block w-full rounded-md border border-zinc-700 bg-zinc-700/[0.15] py-[calc(theme(spacing.2)-1px)] pl-10 pr-3 text-zinc-200 placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none sm:text-sm"
          placeholder="Search projects..."
        />
      </div>
    </div>
  );
};

export default Search;
