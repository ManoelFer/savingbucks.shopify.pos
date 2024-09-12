export interface IProduct {
  title: string;
  description: string;
  tags: string[];
  featuredImage?: {
    altText: string;
    id: string;
    url: string;
    width: number;
    height: number;
  };
  handle: string;
  id: string;
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface IProductResponse {
  product: IProduct;
}

export interface IProductsResponse {
  products: {
    nodes: IProduct[];
  };
}
