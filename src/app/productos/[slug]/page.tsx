import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategorias, getProductoPorSlug } from "@/lib/queries";

export default async function PaginaProducto({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ desde?: string }>;
}) {
  const { slug } = await params;
  const { desde } = await searchParams;

  const producto = await getProductoPorSlug(slug);

  if (!producto) {
    notFound();
  }

  const categorias = await getCategorias();
  const categoria = categorias.find(
    (item) => item.id === producto.categoria_id,
  );

  if (!categoria) {
    notFound();
  }

  const vieneDeCategoria = desde === "categoria";

  return (
    <main className="pagina-producto">
      <Link
        href={vieneDeCategoria ? `/categorias/${categoria.slug}` : "/"}
        className="volver-inicio"
      >
        ← Volver a {vieneDeCategoria ? categoria.nombre : "Happy Pan"}
      </Link>

      <div className="detalle-producto">
        <div className="detalle-imagen">
          {producto.imagen_url && (
            <Image
              src={producto.imagen_url}
              alt={producto.nombre}
              fill
              priority
              sizes="(max-width: 760px) 90vw, 45vw"
              className="foto-producto"
            />
          )}
        </div>

        <div className="detalle-informacion">
          <span className="etiqueta">Hecho con cariño</span>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <strong>${producto.precio.toFixed(2)}</strong>
        </div>
      </div>
    </main>
  );
}
