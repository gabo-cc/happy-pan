# Happy Pan 🍞

Happy Pan es un catálogo web de una panadería artesanal, desarrollado con Next.js, TypeScript y Supabase. Permite explorar categorías, ver productos destacados y consultar la fotografía, descripción y precio de cada producto.

## Instalación

Se instalan las dependencias con:

```bash
pnpm install
```

Se crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=URL_DEL_PROYECTO
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=CLAVE_PUBLICABLE
```

Se inicia la aplicación con `pnpm dev` y se abre en [http://localhost:3000](http://localhost:3000).

## Verificación

El proyecto se comprueba con `pnpm lint` y `pnpm build`. Las categorías y los productos se obtienen de Supabase; sus fotografías se almacenan en el bucket público `productos`.