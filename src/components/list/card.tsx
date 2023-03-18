import { useRouter } from 'next/router';
import { Tooltip } from 'react-tooltip';

import type { Response } from '@/utils/responses';

type CardProps = {
  response: Response;
};

const Card = ({ response }: CardProps) => {
  const router = useRouter();

  const tracks = (response?.track || '').split(',');

  return (
    <li className="mb-6 w-full rounded-md border border-zinc-700 bg-zinc-800 px-2 py-3 md:px-6 md:py-4">
      <div className="flex w-full justify-start">
        <div className="shrink-0">
          <img
            className="h-9 w-9 rounded-full md:h-12 md:w-12"
            src={
              response?.logoUrl ??
              `${router.basePath}/assets/images/profile-picture.png`
            }
            alt={response.name}
          />
        </div>
        <div className="w-full pl-2 md:pl-4">
          <div className="mb-1 flex w-full justify-between">
            <a
              href={response?.productUrl ? response?.productUrl : '#'}
              target="_blank"
              className="text-lg font-bold text-zinc-100 hover:underline"
              rel="noreferrer"
            >
              {response.name}
            </a>
            {response?.demoUrl && (
              <div className="flex items-center justify-end">
                <a
                  href={response?.demoUrl}
                  target="_blank"
                  className="flex items-center text-sm font-bold text-superteam-secondary hover:underline"
                  rel="noreferrer"
                >
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
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  View Demo
                </a>
              </div>
            )}
          </div>
          <p className="mb-2 text-sm text-zinc-300">{response.description}</p>
          <p className="mb-2 flex flex-wrap items-center justify-start">
            <img
              data-tooltip-id={response?.name}
              className="h-4 w-4 rounded-full"
              src={`${router.basePath}/assets/images/st-${response?.superteamMember}.png`}
              alt={response.name}
            />
            <Tooltip id={response?.name} place="right">
              <p className="text-center font-sans text-xs">
                Team from <br />
                Superteam {response?.superteamMember}
              </p>
            </Tooltip>
            <span className="px-2 text-xs text-zinc-500">·</span>
            {response?.productUrl && (
              <a
                href={response?.productUrl}
                target="_blank"
                className="flex items-center justify-start text-xs font-thin text-zinc-400 hover:text-zinc-100"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 pr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <span className="hover:underline">Website</span>
              </a>
            )}
            {response?.productUrl && (
              <span className="px-2 text-xs text-zinc-500">·</span>
            )}
            {response?.codeUrl && (
              <a
                href={response?.codeUrl}
                target="_blank"
                className="flex items-center justify-start text-xs font-thin text-zinc-400 hover:text-zinc-100"
                rel="noreferrer"
              >
                <svg
                  className="h-4 w-4 pr-1"
                  viewBox="0 0 98 96"
                  width="98"
                  height="96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="currentColor"
                  />
                </svg>
                <span className="hover:underline">Code</span>
              </a>
            )}
            {response?.codeUrl && (
              <span className="px-2 text-xs text-zinc-500">·</span>
            )}
            {response?.teamLeadName && (
              <a
                href={
                  response?.teamLeadSocialUrl
                    ? response?.teamLeadSocialUrl
                    : '#'
                }
                target={response?.teamLeadSocialUrl ? '_blank' : '_self'}
                className="flex items-center justify-start text-xs font-thin text-zinc-400 hover:text-zinc-100"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 pr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="hover:underline">
                  {response?.teamLeadName}
                  {response?.teamMembersNames && (
                    <span className="break-all">
                      , {response?.teamMembersNames}
                    </span>
                  )}
                </span>
              </a>
            )}
          </p>
          {response?.track && (
            <p className="">
              {tracks.map((track, index) => (
                <span
                  className="mr-2 rounded-full bg-zinc-700 px-1.5 py-0.5 text-xs font-medium text-zinc-300"
                  key={index}
                >
                  {track}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
