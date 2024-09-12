import 'next';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SHOPIFY_ADMIN_API_ACCESS_TOKEN: string;
      SHOPIFY_GRAPHQL_API_URL: string;
    }
  }
}
