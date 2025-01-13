export const CountryItemSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-between py-2 px-4 bg-white border rounded-lg shadow-md animate-pulse">
        <div className="flex items-center space-x-6">
          <div className="w-[22px] h-[15px] bg-gray-200 object-cover rounded"></div>
          <div className="w-[105px] h-[24px] bg-gray-200 rounded-lg"></div>
        </div>
        <div className="w-[95px] h-[40px] bg-gray-200 rounded-lg"></div>
      </div>
    </>
  );
};
