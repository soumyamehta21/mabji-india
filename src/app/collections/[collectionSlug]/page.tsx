import { collections, products } from "@/lib/data";
import { notFound } from "next/navigation";

export default function CollectionPage({
  params,
}: {
  params: { collectionSlug: string };
}) {
  const collection = collections.find((c) => c.slug === params.collectionSlug);
  if (!collection) return notFound();

  const items = products.filter(
    (p) => p.collectionSlug === params.collectionSlug
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{collection.title}</h1>
      <p>{collection.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {items.map((product) => (
          <div key={product.slug} className="border p-4 rounded">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
