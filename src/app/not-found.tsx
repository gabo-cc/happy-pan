import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pagina-estado">
      <h1>Categoría no encontrada</h1>
      <p>La categoría que buscas no existe.</p>
      <Link href="/" className="boton-principal">
        Volver al inicio
      </Link>
    </main>
  );
}