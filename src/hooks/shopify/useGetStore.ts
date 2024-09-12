import { gql } from '@/helpers';

import { GrapQLResponse } from '@/types/shopify/graphql-types';
import { IStoreResponse } from '@/types/shopify/store';

export const useGetStore = async (): Promise<GrapQLResponse<IStoreResponse>> => {
  const res = await fetch(process.env.SHOPIFYGR_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query: gql`
        query ShopQuery {
          shop {
            name
          }
        }
      `,
    }),
  });

  if (!res.ok) {
    const text = await res.text(); // get the response body for more information

    throw new Error(`
        Failed to fetch data
        Status: ${res.status}
        Response: ${text}
      `);
  }

  const storeJson = (await res.json()) as GrapQLResponse<IStoreResponse>;

  return storeJson;
};
