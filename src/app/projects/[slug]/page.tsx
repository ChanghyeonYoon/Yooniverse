import { Metadata } from "next";
import { redirect } from "next/navigation";

import { DefaultMetadata, DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Container } from "@/src/components/Container";
import { SingleProduct } from "@/src/components/Product";
import { products } from "@/src/constants/products";
import { Product } from "@/src/types/products";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: `윤창현 | ${product.title}`,
      description: product.description,
      openGraph: {
        title: `윤창현 | ${product.title}`,
        description: product.description,
        images: [
          {
            url: product.thumbnail.src,
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
      },
    };
  } else {
    return {
      ...DefaultMetadata,
      openGraph: DefaultOpenGraph,
    };
  }
}

export default function SingleProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
