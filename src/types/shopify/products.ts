export interface IProductsResponse {
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
}
