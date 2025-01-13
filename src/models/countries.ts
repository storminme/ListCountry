import { revalidatePath } from 'next/cache';

export type Country = {
  flag_url: string;
  name_ru: string;
  iso_code2: string;
  iso_code3: string;
};

let countriesCache: Country[] | null = null;

export const getCountries = async (): Promise<Country[]> => {
  if (countriesCache) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return countriesCache;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json',
      {
        cache: 'no-store',
      },
    );
    countriesCache = await response.json();
    return countriesCache as Country[];
  } catch (error) {
    throw new Error(`Error loading countries: ${(error as Error).message}`);
  }
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Test error');
};

export const removeCountry = async (iso_code2: string) => {
  if (!countriesCache) return;
  try {
    countriesCache = countriesCache.filter(
      (country) => country.iso_code2 !== iso_code2,
    );
    revalidatePath('/');
  } catch (error) {
    throw new Error(`Error removing country: ${(error as Error).message}`);
  }
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Test error');
};
