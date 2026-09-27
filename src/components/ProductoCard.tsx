import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/lib/types";

export default function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <article className="tarjeta-producto">
      <Link href={`/productos/${producto.slug}`} className="tarjeta-enlace">
        <div className="producto-imagen">
          {producto.imagen_url && (
            <Image
              src={producto.imagen_url}
              alt={producto.nombre}
              fill
              sizes="(max-width: 560px) 90vw, (max-width: 900px) 45vw, 25vw"
              className="foto-producto"
            />
          )}
        </div>

        <div className="producto-informacion">
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <strong>${producto.precio.toFixed(2)}</strong>
        </div>
      </Link>
    </article>
  );
}
