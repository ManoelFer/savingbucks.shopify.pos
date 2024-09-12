export interface ShopifyGraphQL_Extensions {
  cost: {
    requestedQueryCost: number;
    actualQueryCost: number;
    throttleStatus: {
      maximumAvailable: number;
      currentlyAvailable: number;
      restoreRate: number;
    };
  };
}

export interface GrapQLResponse<T> {
  data: T;
  extensions: ShopifyGraphQL_Extensions;
}
