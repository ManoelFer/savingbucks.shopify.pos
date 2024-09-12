import { gql } from '@/helpers';
import { GrapQLResponse } from '@/types/shopify/graphql-types';
import { IProductsResponse } from '@/types/shopify/products';

export const useGetProducts = async (): Promise<GrapQLResponse<IProductsResponse>> => {
  const res = await fetch(process.env.SHOPIFY_GRAPHQL_API_URL, {
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
              description
              featuredImage {
                altText
                id
                url
                width
                height
              }
              handle
              id
              priceRangeV2 {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              tags
              title
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

  const productsJson = (await res.json()) as GrapQLResponse<IProductsResponse>;

  return productsJson;
};
