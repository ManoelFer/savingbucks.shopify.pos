import { gql } from '@/helpers';

import { ShopifyGraphQLProductsResponse } from '@/types/shopify/products';

export const useGetProducts = async (): Promise<ShopifyGraphQLProductsResponse> => {
  const res = await fetch(process.env.SHOPIFYGR_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query: gql`
        query ProductsQuery {
          products(first: 6) {
            nodes {
              title
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
              }
            }
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

  const productsJson = (await res.json()) as ShopifyGraphQLProductsResponse;

  return productsJson;
};
