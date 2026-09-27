import Link from "next/link";
import { notFound } from "next/navigation";
import ProductoCard from "@/components/ProductoCard";
import { getCategoriaPorSlug, getProductosPorCategoria } from "@/lib/queries";

export default async function PaginaCategoria({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoria = await getCategoriaPorSlug(slug);

  if (!categoria) {
    notFound();
  }

  const productos = await getProductosPorCategoria(categoria.id);

  return (
    <main className="pagina-categoria">
      <Link href="/" className="volver-inicio">
        ← Volver a Happy Pan
      </Link>

      <span className="etiqueta">Nuestro catálogo</span>
      <h1>{categoria.nombre}</h1>
      <p>{categoria.descripcion}</p>

      {productos.length > 0 ? (
        <div className="lista-productos">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <p>Por ahora no hay productos disponibles en esta categoría.</p>
      )}
    </main>
  );
}
