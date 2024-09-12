import { HeaderStoreInfo, StoreProductsList } from './components';

export default function Store() {
  return (
    <main className="m-10 space-y-12">
      <div className="my-5 flex flex-col items-center">
        <HeaderStoreInfo />

        <StoreProductsList />
      </div>
    </main>
  );
}
