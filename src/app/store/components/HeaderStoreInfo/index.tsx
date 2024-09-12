import { useGetStore } from '@/hooks/shopify';

export async function HeaderStoreInfo() {
  const store_response = await useGetStore();

  return <h1 className="m-5 text-center text-3xl text-gray-800">{store_response?.data.shop.name}</h1>;
}
