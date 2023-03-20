import type { Filter } from '@/utils/filters';

type FiltersProps = {
  searchFilters: {
    page: number;
    searchText: string;
    filters?: Array<Filter>;
  };
  setSearchFilters: any;
};

const Filters = ({ searchFilters, setSearchFilters }: FiltersProps) => {
  const toggleChange = (filterId: string, optionId: string) => {
    const changedFilters = searchFilters.filters?.map((f) => {
      if (f.id === filterId) {
        const options = f?.options?.map((o) => {
          if (o.id === optionId) {
            return {
              ...o,
              isSelected: !o.isSelected,
            };
          }
          return o;
        });
        return {
          ...f,
          options,
        };
      }
      return f;
    });
    setSearchFilters({
      page: 0,
      searchText: searchFilters.searchText,
      filters: changedFilters,
    });
  };

  const removeFilters = () => {
    const changedFilters = searchFilters.filters?.map((f) => {
      const options = f?.options?.map((o) => ({
        ...o,
        isSelected: false,
      }));
      return {
        ...f,
        options,
      };
    });
    setSearchFilters({
      page: 0,
      searchText: searchFilters.searchText,
      filters: changedFilters,
    });
  };

  return (
    <>
      <div className="flex items-center justify-end">
        <button
          type="button"
          onClick={() => removeFilters()}
          className="cursor-pointer text-sm font-thin text-red-400 hover:text-zinc-100 hover:underline"
        >
          Clear All
        </button>
      </div>
      {searchFilters.filters?.map((filter, filterIndex) => (
        <div
          className={
            filterIndex < (searchFilters.filters?.length || 0) - 1 ? 'mb-6' : ''
          }
          key={filterIndex}
        >
          <h5 className="mb-3 text-zinc-100">{filter.name}</h5>
          <fieldset>
            <div className="space-y-2">
              {filter?.options?.map((option, optionIndex) => (
                <div className="relative flex items-start" key={optionIndex}>
                  <div className="flex h-6 items-center">
                    <input
                      onChange={() => toggleChange(filter.id, option.id)}
                      id={option.id}
                      aria-describedby={`${option.id}-description`}
                      name={option.id}
                      disabled={!option.count}
                      type="checkbox"
                      checked={option.isSelected}
                      className="h-4 w-4 rounded border-gray-300 text-superteam-secondary focus:ring-superteam-secondary-light"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor={option.id}
                      className={`font-thin text-zinc-300 disabled:cursor-not-allowed disabled:font-thin disabled:text-zinc-900 ${
                        option.count
                          ? 'cursor-pointer  hover:font-bold hover:text-zinc-100 '
                          : ''
                      }`}
                    >
                      {option.id}{' '}
                      <span className="text-zinc-400">({option.count})</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      ))}
    </>
  );
};

export default Filters;
