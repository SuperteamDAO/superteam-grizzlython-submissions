import type { Response } from '@/utils/responses';

export type Option = {
  id: string;
  isSelected: boolean;
  count: number;
};

export type Filter = {
  id: string;
  name: string;
  options: Array<Option>;
};

export const defaultFilters: Array<Filter> = [
  {
    id: 'track',
    name: 'Hackathon Track',
    options: [
      {
        id: 'Mobile',
        isSelected: false,
        count: 0,
      },
      {
        id: 'DeFi',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Payments',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Consumer',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Tools & Infrastructure',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Gaming',
        isSelected: false,
        count: 0,
      },
      {
        id: 'DAOs and Network States',
        isSelected: false,
        count: 0,
      },
    ],
  },
  {
    id: 'superteamMember',
    name: 'Superteam Country',
    options: [
      {
        id: 'India',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Turkey',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Vietnam',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Germany',
        isSelected: false,
        count: 0,
      },
      {
        id: 'Mexico',
        isSelected: false,
        count: 0,
      },
    ],
  },
];

export const initFilters = (responses: Array<Response>) => {
  const filters = defaultFilters.map((f) => {
    const optionsWithCount = f.options.map((o) => {
      const list = responses?.filter((r) =>
        f.id === 'track'
          ? r.track.indexOf(o.id) >= 0
          : r.superteamMember.indexOf(o.id) >= 0
      );
      return {
        ...o,
        count: list.length,
      };
    });

    return {
      ...f,
      options: optionsWithCount,
    };
  });
  return filters;
};
