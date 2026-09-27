import Image from "next/image";
import Link from "next/link";
import ProductoCard from "@/components/ProductoCard";
import { getCategorias, getProductosDestacados } from "@/lib/queries";

export default async function Home() {
  const [categorias, destacados] = await Promise.all([
    getCategorias(),
    getProductosDestacados(),
  ]);

  return (
    <main>
      <header className="encabezado">
        <Link href="/" className="marca">
          <span aria-hidden="true">✳</span> Happy Pan
        </Link>

        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
        </nav>

        <a className="enlace-catalogo" href="#productos">
          Ver catálogo
        </a>
      </header>

      <section className="portada" id="inicio">
        <div className="portada-contenido">
          <span className="etiqueta">Panadería artesanal</span>

          <h1>
            Un poquito de <em>felicidad</em> en cada bocado.
          </h1>

          <p>
            Pan recién hecho, sabores para compartir y ese aroma que hace
            cualquier día un poco mejor.
          </p>

          <a className="boton-principal" href="#productos">
            Descubre nuestros productos <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="portada-visual">
          <Image
            src="/hero-panaderia.png"
            alt="Panes y croissants recién horneados de Happy Pan"
            fill
            priority
            sizes="(max-width: 760px) 90vw, 45vw"
            className="portada-foto"
          />
          <div className="sello">Hecho con cariño</div>
        </div>
      </section>

      <section className="introduccion-catalogo" id="productos">
        <span className="etiqueta">Recién salidos del horno</span>
        <h2>Encuentra tu favorito</h2>
        <p>Conoce los sabores que preparamos para alegrarte el día.</p>

        <div className="lista-categorias">
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              href={`/categorias/${categoria.slug}`}
              className="categoria-etiqueta"
            >
              {categoria.nombre}
            </Link>
          ))}
        </div>

        <div className="lista-productos">
          {destacados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <section className="sobre-nosotros" id="nosotros">
        <div>
          <span className="etiqueta">Sobre Happy Pan</span>
          <h2>Los buenos momentos empiezan con algo recién horneado.</h2>
        </div>

        <p>
          Somos una panadería creada para disfrutar los pequeños momentos:
          elegir un pan favorito, compartir un postre y volver por otro.
        </p>
      </section>
    </main>
  );
}
