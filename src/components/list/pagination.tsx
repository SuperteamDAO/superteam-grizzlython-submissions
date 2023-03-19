import type { Filter } from '@/utils/filters';

type PaginationProps = {
  searchFilters: {
    page: number;
    searchText: string;
    filters?: Array<Filter>;
  };
  setSearchFilters: any;
  total: number;
};

const Pagination = ({
  searchFilters,
  setSearchFilters,
  total,
}: PaginationProps) => {
  const remainder = total % 10 > 0 ? 0 : 1;
  const lastPage = Math.floor(total / 10) - remainder;
  const { page } = searchFilters;

  const setPage = (pageNum: number) => {
    setSearchFilters({
      page: pageNum,
      searchText: searchFilters.searchText,
      filters: searchFilters.filters,
    });
  };
  return (
    <nav
      className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-end"
      aria-label="Pagination"
    >
      <div className="">
        <p className="text-sm font-normal text-zinc-400">
          Showing <span className="font-bold">{page * 10 + 1}</span> -{' '}
          <span className="font-bold">
            {page < lastPage ? page * 10 + 10 : total}
          </span>{' '}
          of <span className="font-bold">{total}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
          disabled={page === 0}
          className="rounded-md border border-zinc-700 bg-zinc-700/[0.15] py-1.75 px-2.5 text-sm text-zinc-400 outline-offset-2 transition hover:bg-zinc-800  hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 active:transition-none disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-800/50 disabled:text-zinc-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setPage(page < lastPage ? page + 1 : page)}
          disabled={page >= lastPage}
          className="ml-3 rounded-md border border-zinc-700 bg-zinc-700/[0.15] py-1.75 px-2.5 text-sm text-zinc-400  outline-offset-2 transition hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 active:transition-none disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-800/50 disabled:text-zinc-500"
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
