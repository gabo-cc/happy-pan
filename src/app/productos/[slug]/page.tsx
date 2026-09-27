import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductoPorSlug } from "@/lib/queries";

export default async function PaginaProducto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const producto = await getProductoPorSlug(slug);

  if (!producto) {
    notFound();
  }

  return (
    <main className="pagina-producto">
      <Link href="/" className="volver-inicio">
        ← Volver a Happy Pan
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
