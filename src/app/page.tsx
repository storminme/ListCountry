export const dynamic = 'force-dynamic';
import { Loading } from '@/сomponents';
import { Suspense } from 'react';
import { CountryList } from '@/сomponents';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <CountryList />
    </Suspense>
  );
}
