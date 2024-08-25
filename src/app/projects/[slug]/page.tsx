import { Metadata } from "next";
import { redirect } from "next/navigation";

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
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | John Doe",
      description:
        "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
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
