import { responses } from '@/utils/responses';

const Stats = () => {
  const stats = [
    {
      id: 1,
      mobileName: 'Participants',
      name: 'Participants',
      value: '10,000+',
    },
    { id: 2, mobileName: 'Countries', name: 'Countries', value: '65+' },
    {
      id: 3,
      mobileName: 'Submissions',
      name: 'All Submissions',
      value: '800+',
    },
    {
      id: 4,
      mobileName: 'Superteam Projects',
      name: 'Superteam Submissions',
      value: `${responses?.length}+`,
    },
  ];

  return (
    <div className="w-full sm:px-8">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative w-full px-6 md:px-8">
          <dl className="grid grid-cols-3 gap-0.5 overflow-hidden border-b border-zinc-700 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`flex flex-col py-2 px-0 md:p-4 ${
                  stat.id === 3 ? 'hidden md:flex' : ''
                }`}
              >
                <dt className="hidden text-xs font-normal leading-6 text-zinc-400 md:block md:text-sm">
                  {stat.name}
                </dt>
                <dt className="text-xs font-normal leading-6 text-zinc-400 md:hidden md:text-sm">
                  {stat.mobileName}
                </dt>
                <dd className="order-first text-2xl font-bold tracking-tight text-zinc-300 md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;
