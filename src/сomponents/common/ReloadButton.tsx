'use client';

export const ReloadButton = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 text-sm font-medium bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Попробовать снова
    </button>
  );
};
