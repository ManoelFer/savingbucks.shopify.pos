import { SHOPIFYGRAPHQL_EXTENSIONS } from './extensions';

export type ShopifyGraphQLStoreResponse = {
  data: {
    shop: {
      name: string;
    };
  };
  extensions: SHOPIFYGRAPHQL_EXTENSIONS;
};
