"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="pagina-estado">
      <h1>Algo salió mal</h1>
      <p>No pudimos cargar el catálogo. Inténtalo de nuevo.</p>
      <button type="button" onClick={reset} className="boton-principal">
        Reintentar
      </button>
    </main>
  );
}
