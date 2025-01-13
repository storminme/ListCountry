'use client';

import { useState } from 'react';
import { ErrorModal } from '@/сomponents/common/ErrorModal';

type AnimatedDeleteButtonProps = {
  onDeleteAction: () => Promise<void>;
  countryName: string;
};

export const AnimatedDeleteButton = ({
  onDeleteAction,
  countryName,
}: AnimatedDeleteButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    const article = (e.currentTarget as HTMLButtonElement).closest(
      '[data-country-item]',
    ) as HTMLElement;
    if (!article) return;

    setIsDeleting(true);

    const articleHeight = article.offsetHeight;
    article.style.height = `${articleHeight}px`;
    article.classList.add(
      'opacity-0',
      'translate-x-full',
      'transition-all',
      'duration-500',
      'ease-in-out',
    );

    await new Promise((resolve) => setTimeout(resolve, 500));

    article.style.height = '0px';
    article.classList.add('mt-[-8px]');

    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      await onDeleteAction();
    } catch {
      setIsDeleting(false);
      article.style.height = `${articleHeight}px`;
      article.classList.remove('opacity-0', 'translate-x-full', 'mt-[-8px]');
      await new Promise((resolve) => setTimeout(resolve, 600));
      setShowError(true);
    }
  };

  return (
    <>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
        aria-label={`Удалить ${countryName}`}
      >
        {isDeleting ? 'Удаление...' : 'Удалить'}
      </button>

      {showError && (
        <ErrorModal
          message={`Не удалось удалить страну ${countryName}. Пожалуйста, попробуйте позже.`}
          action={() => setShowError(false)}
        />
      )}
    </>
  );
};
