import Link from 'next/link';
import Image from 'next/image';

import { useGetProducts } from '@/hooks/shopify';

import { formatPrice } from '@/helpers';

import { Button } from '@/components/ui';

export async function StoreProductsList() {
  const { data } = await useGetProducts();

  return (
    <main className="container mx-auto">
      <div className="px-5">
        <h2 className="mb-3 text-2xl font-bold">Our Products:</h2>
        <ul className="grid grid-cols-12 gap-4 pb-12">
          {data.products.nodes.map((product) => {
            const prodId = product.id.split('/').pop();

            return (
              <li
                key={product.id}
                className="col-span-full overflow-hidden rounded-md border border-slate-200 md:col-span-6 lg:col-span-4"
              >
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

                <div className="p-5">
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

                  <Link href={`/store/products/${prodId}`}>
                    <Button label="View Product" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
