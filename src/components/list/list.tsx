import { useState } from 'react';

import { responses } from '@/utils/responses';

import Card from './card';

const List = () => {
  const [filteredResponses, setFilteredResponses] = useState(
    responses.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    )
  );
  console.log(
    'file: list.tsx:9 ~ List ~ setFilteredResponses:',
    setFilteredResponses
  );
  return (
    <div className="w-full sm:px-8">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative w-full p-8">
          <div className="flex w-full justify-between gap-8">
            <div className="w-full">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                {responses?.length} Submissions
              </h1>
              <ul className="py-8">
                {filteredResponses.map((response) => (
                  <Card response={response} key={response.order} />
                ))}
              </ul>
            </div>
            <div className="hidden w-1/3 rounded border border-zinc-700 bg-zinc-800 py-6 px-8 md:block">
              <div className="mb-6">
                <h5 className="mb-3 text-zinc-100">Hackathon Track</h5>
                <fieldset>
                  <div className="space-y-2">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-thin text-zinc-300"
                        >
                          Mobile <span className="text-zinc-400">(22)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          aria-describedby="candidates-description"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-thin text-zinc-300"
                        >
                          DeFi <span className="text-zinc-400">(7)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          aria-describedby="offers-description"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-thin text-zinc-300"
                        >
                          Payments <span className="text-zinc-400">(4)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="consumer"
                          aria-describedby="consumer-description"
                          name="consumer"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="consumer"
                          className="font-thin text-zinc-300"
                        >
                          Consumer <span className="text-zinc-400">(9)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="tools"
                          aria-describedby="tools-description"
                          name="tools"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="tools"
                          className="font-thin text-zinc-300"
                        >
                          Tools & Infrastructure{' '}
                          <span className="text-zinc-400">(4)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="gaming"
                          aria-describedby="gaming-description"
                          name="gaming"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="gaming"
                          className="font-thin text-zinc-300"
                        >
                          Gaming <span className="text-zinc-400">(1)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="dao"
                          aria-describedby="dao-description"
                          name="dao"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="dao"
                          className="font-thin text-zinc-300"
                        >
                          DAOs & Network States{' '}
                          <span className="text-zinc-400">(2)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="">
                <h5 className="mb-3 text-zinc-100">Superteam Country</h5>
                <fieldset>
                  <div className="space-y-2">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-thin text-zinc-300"
                        >
                          India <span className="text-zinc-400">(22)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          aria-describedby="candidates-description"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-thin text-zinc-300"
                        >
                          Turkey <span className="text-zinc-400">(7)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          aria-describedby="offers-description"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-thin text-zinc-300"
                        >
                          Vietnam <span className="text-zinc-400">(4)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="consumer"
                          aria-describedby="consumer-description"
                          name="consumer"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="consumer"
                          className="font-thin text-zinc-300"
                        >
                          Germany <span className="text-zinc-400">(9)</span>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="tools"
                          aria-describedby="tools-description"
                          name="tools"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="tools"
                          className="font-thin text-zinc-300"
                        >
                          Mexico <span className="text-zinc-400">(4)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
