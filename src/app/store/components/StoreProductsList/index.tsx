import { useGetProducts } from '@/hooks/shopify';

import { Table } from '@/components/ui';
import { USDollar } from '@/helpers';

export async function StoreProductsList() {
  const products_response = await useGetProducts();

  return (
    <Table
      columns={[{ label: 'Name' }, { label: 'Price' }]}
      rows={products_response?.data.products.nodes.map(({ title, priceRangeV2 }) => [
        title,
        USDollar.format(Number(priceRangeV2.maxVariantPrice.amount)),
      ])}
    />
  );
}
