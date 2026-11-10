import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLandingPage } from "@/components/products/product-landing";
import {
  getProductLanding,
  productLandings,
} from "@/lib/product-landings";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productLandings.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductLanding(slug);
  if (!product) {
    return { title: "Product · UgnAI Labs Co." };
  }

  return {
    title: `${product.name} · UgnAI Labs Co.`,
    description: product.description,
    openGraph: {
      title: `${product.name} · UgnAI Labs Co.`,
      description: product.tagline,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductLanding(slug);
  if (!product) notFound();
  return <ProductLandingPage product={product} />;
}
