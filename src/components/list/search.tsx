import type { Filter } from '@/utils/filters';

import Pagination from './pagination';

type SearchProps = {
  searchFilters: {
    page: number;
    searchText: string;
    filters?: Array<Filter>;
  };
  setSearchFilters: any;
  total: number;
};

const Search = ({ searchFilters, setSearchFilters, total }: SearchProps) => {
  const setText = (text: string) => {
    setSearchFilters({
      page: 0,
      searchText: text,
      filters: searchFilters.filters,
    });
  };
  return (
    <div className="flex flex-col items-center justify-between gap-3 pb-4 md:flex-row md:gap-0">
      <div className="relative w-full rounded-md shadow-md shadow-zinc-800/5 hover:bg-zinc-800 md:w-auto">
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
          onChange={(e) => setText(e.target.value)}
          type="input"
          value={searchFilters.searchText}
          className="block w-full rounded-md border border-zinc-700 bg-zinc-700/[0.15] py-[calc(theme(spacing.2)-1px)] px-10 text-zinc-200 placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none sm:text-sm"
          placeholder="Search projects..."
        />
        {!!searchFilters.searchText && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              onClick={() => setText('')}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>
      <Pagination
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
        total={total}
      />
    </div>
  );
};

export default Search;
