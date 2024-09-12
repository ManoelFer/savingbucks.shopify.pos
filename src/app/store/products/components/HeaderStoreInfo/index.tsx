import { useGetStore } from '@/hooks/shopify';

export async function HeaderStoreInfo() {
  const { data } = await useGetStore();

  return <h1 className="m-5 text-center text-3xl text-gray-800">{data.shop.name}</h1>;
}
