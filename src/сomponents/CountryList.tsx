import { CountryItem } from '@/сomponents';
import { getCountries } from '@/models';
import { ReloadButton } from '@/сomponents';

export const CountryList = async () => {
  try {
    const countries = await getCountries();
    return (
      <div className="max-w-xl mx-auto p-4 space-y-4">
        <h1 className="flex text-4xl font-bold mb-6 justify-center">
          Список стран
        </h1>
        <div className="flex flex-col gap-2">
          {countries.map((country) => (
            <CountryItem key={country.iso_code2} country={country} />
          ))}
        </div>
      </div>
    );
  } catch {
    return (
      <div className="max-w-xl text-xl font-bold h-screen mx-auto p-4 space-y-4 flex flex-col items-center justify-center">
        Не удалось загрузить список стран
        <ReloadButton />
      </div>
    );
  }
};
