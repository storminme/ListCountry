import { CountryItemSkeleton } from '@/сomponents';

export const Loading = () => {
  return (
    <div className="max-w-xl min-w-[365px] mx-auto p-4 space-y-4">
      <h1 className="flex text-4xl font-bold mb-6 justify-center">
        Список стран
      </h1>
      <div className="flex flex-col gap-2">
        {Array(50)
          .fill(0)
          .map((_, index) => (
            <CountryItemSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};
