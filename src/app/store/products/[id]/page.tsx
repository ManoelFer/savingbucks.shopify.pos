import Image from 'next/image';

import { formatPrice } from '@/helpers';
import { useGetProduct } from '@/hooks/shopify';

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const { data } = await useGetProduct(params.id);

  const product = data?.product;

  return (
    <div className="container mx-auto md:pb-10">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:basis-1/2">
          {!!product.featuredImage ? (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width={product.featuredImage.width}
              height={product.featuredImage.height}
              className="h-96 w-full object-cover"
              placeholder="blur"
              blurDataURL={product.featuredImage.url}
            />
          ) : (
            <div className="h-96 w-full bg-gray-400 object-cover opacity-15" />
          )}
        </div>

        <div className="p-5 md:basis-1/2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold">
              {tag}
            </span>
          ))}

          <h3 className="mt-3 text-3xl font-medium">{product.title}</h3>

          <h4>
            {formatPrice(product.priceRangeV2.minVariantPrice.amount)}{' '}
            {product.priceRangeV2.minVariantPrice.currencyCode}
          </h4>

          <p className="mb-4 mt-2">{product.description}</p>

          <button
            className="inline-block rounded-md border border-blue-600 p-2 text-blue-600 duration-150 ease-in-out hover:bg-blue-600 hover:text-white"
            type="button"
          >
            Add to Cart
          </button>
          <span className="mt-1 block text-xs">* Note: this won't actually do anything</span>
        </div>
      </div>
    </div>
  );
}
