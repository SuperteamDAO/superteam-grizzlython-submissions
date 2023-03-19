import { useEffect, useState } from 'react';

import { initFilters } from '@/utils/filters';
import { responses } from '@/utils/responses';

import Card from './card';
import Filters from './filters';
import Pagination from './pagination';
import Search from './search';

const List = () => {
  const [filteredResponses, setFilteredResponses] = useState(
    responses.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    )
  );
  const initializedFilters = initFilters(responses);
  const [searchFilters, setSearchFilters] = useState({
    page: 0,
    searchText: '',
    filters: initializedFilters,
  });
  const [totalFilteredCount, setTotalFilteredCount] = useState(
    responses?.length
  );

  useEffect(() => {
    // Apply search
    const searchedResponses = !searchFilters.searchText
      ? responses
      : responses.filter(
          (r) =>
            (r?.name || '')
              .toLowerCase()
              .indexOf(searchFilters.searchText.toLowerCase()) >= 0 ||
            (r?.description || '')
              .toLowerCase()
              .indexOf(searchFilters.searchText.toLowerCase()) >= 0 ||
            (r?.teamLeadName || '')
              .toLowerCase()
              .indexOf(searchFilters.searchText.toLowerCase()) >= 0 ||
            (r?.teamMembersNames || '')
              .toLowerCase()
              .indexOf(searchFilters.searchText.toLowerCase()) >= 0
        );

    // Apply filters
    let finalResponses = [];
    const trueFilters = searchFilters.filters
      .map((f) => {
        const trueOptions = f.options.filter((o) => o.isSelected);
        if (trueOptions.length) {
          return {
            ...f,
            options: trueOptions,
          };
        }
        return null;
      })
      .filter((f) => !!f);
    if (!trueFilters.length) {
      const changedResponses = searchedResponses?.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );
      finalResponses = changedResponses;
      // setFilteredResponses(changedResponses);
    } else {
      const trackOptions = trueFilters
        ?.find((tf) => tf?.id === 'track')
        ?.options?.map((o) => o.id);
      const superteamMemberOptions = trueFilters
        ?.find((tf) => tf?.id === 'superteamMember')
        ?.options?.map((o) => o.id);

      const changedResponses = searchedResponses
        ?.filter((r) => {
          const isTrack = trackOptions?.length
            ? !!trackOptions.find((t) => r?.track?.indexOf(t) >= 0)
            : true;
          const isSuperteamMember = superteamMemberOptions?.length
            ? !!superteamMemberOptions.find(
                (st) => r?.superteamMember?.indexOf(st) >= 0
              )
            : true;
          return isTrack && isSuperteamMember;
        })
        ?.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        );
      finalResponses = changedResponses;
      // setFilteredResponses(changedResponses);
    }

    // Apply pagination
    setTotalFilteredCount(finalResponses.length);
    console.log('file: list.tsx:20 ~ List ~ page:', searchFilters.page);
    const from = searchFilters.page * 10;
    const to = searchFilters.page * 10 + 10;
    setFilteredResponses(finalResponses.slice(from, to));
  }, [searchFilters]);

  return (
    <div className="w-full sm:px-8">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative w-full p-6 md:p-8">
          <div className="flex w-full justify-between gap-6 md:gap-8">
            <div className="w-full">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                Submissions (
                {filteredResponses?.length !== responses?.length
                  ? `${filteredResponses?.length} of ${responses?.length}`
                  : responses?.length}
                )
              </h1>
              <Search
                searchFilters={searchFilters}
                setSearchFilters={setSearchFilters}
                total={totalFilteredCount}
              />
              <ul className="">
                {filteredResponses.map((response) => (
                  <Card response={response} key={response.order} />
                ))}
              </ul>
              <Pagination
                searchFilters={searchFilters}
                setSearchFilters={setSearchFilters}
                total={totalFilteredCount}
              />
            </div>
            <div className="mt-2 hidden w-1/3 pt-24 md:block">
              <Filters
                searchFilters={searchFilters}
                setSearchFilters={setSearchFilters}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
