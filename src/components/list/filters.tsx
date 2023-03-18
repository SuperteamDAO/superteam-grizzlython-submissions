import type { Filter } from '@/utils/filters';

type FiltersProps = {
  filters?: Array<Filter>;
  setFilters: any;
};

const Filters = ({ filters, setFilters }: FiltersProps) => {
  const toggleChange = (filterId: string, optionId: string) => {
    const changedFilters = filters?.map((f) => {
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
    setFilters(changedFilters);
  };
  return (
    <div className="rounded border border-zinc-700 bg-zinc-800 px-2 py-3 md:px-6 md:py-4">
      {filters?.map((filter, filterIndex) => (
        <div
          className={filterIndex < filters.length - 1 ? 'mb-6' : ''}
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
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-superteam-secondary focus:ring-superteam-secondary-light"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor={option.id}
                      className="font-thin text-zinc-300"
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
    </div>
  );
};

export default Filters;