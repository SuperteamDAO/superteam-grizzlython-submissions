import { Disclosure, Transition } from '@headlessui/react';

import type { Filter } from '@/utils/filters';

import Filters from './filters';

type MobileFiltersProps = {
  searchFilters: {
    page: number;
    searchText: string;
    filters?: Array<Filter>;
  };
  setSearchFilters: any;
};

const MobileFilters = ({
  searchFilters,
  setSearchFilters,
}: MobileFiltersProps) => {
  return (
    <div className="mb-3 rounded border border-zinc-700 bg-zinc-700/[0.15] px-1 py-2">
      <Disclosure>
        <Disclosure.Button className="flex w-full items-center justify-center text-sm font-thin text-zinc-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mr-1 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
          Filters
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="px-2 py-3 md:px-6 md:py-4">
            <Filters
              searchFilters={searchFilters}
              setSearchFilters={setSearchFilters}
            />
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

export default MobileFilters;
