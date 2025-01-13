import { Country } from '@/models';
import { AnimatedDeleteButton } from '@/сomponents';
import { removeCountry } from '@/models';
import Image from 'next/image';

export const CountryItem = ({ country }: { country: Country }) => {
  const handleDelete = async () => {
    'use server';
    await removeCountry(country.iso_code2);
  };

  return (
    <article data-country-item className={'transition-all duration-500'}>
      <div className="flex items-center justify-between py-2 px-4 bg-gray-900 rounded-lg shadow-md">
        <div className="flex items-center space-x-6">
          <Image
            src={`https:${country.flag_url}`}
            alt={`Flag of ${country.name_ru}`}
            width={22}
            height={15}
            className="max-w-[22px] max-h-[15px] object-cover rounded"
            loading="lazy"
          />
          <h2 className="font-medium text-white">{country.name_ru}</h2>
        </div>
        <form>
          <AnimatedDeleteButton
            countryName={country.name_ru}
            onDeleteAction={handleDelete}
          />
        </form>
      </div>
    </article>
  );
};
