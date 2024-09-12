import { SHOPIFYGRAPHQL_EXTENSIONS } from './extensions';

export type ShopifyGraphQLProductsResponse = {
  data: {
    products: {
      nodes: {
        title: string;
        priceRangeV2: {
          maxVariantPrice: {
            amount: string;
          };
        };
      }[];
    };
  };
  extensions: SHOPIFYGRAPHQL_EXTENSIONS;
};
