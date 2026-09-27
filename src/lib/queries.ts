import { supabase } from "./supabase";
import type { Categoria, Producto } from "./types";

export async function getCategorias(): Promise<Categoria[]> {
  const { data, error } = await supabase
    .from("categorias")
    .select("id, nombre, slug, descripcion")
    .order("nombre");

  if (error) {
    throw new Error(`No se pudieron cargar las categorías: ${error.message}`);
  }

  return data as Categoria[];
}

export async function getProductosDestacados(): Promise<Producto[]> {
  const { data, error } = await supabase
    .from("productos")
    .select(
      "id, categoria_id, nombre, slug, descripcion, precio, imagen_url, destacado, activo",
    )
    .eq("activo", true)
    .eq("destacado", true)
    .order("nombre");

  if (error) {
    throw new Error(
      `No se pudieron cargar los productos destacados: ${error.message}`,
    );
  }

  return data as Producto[];
}

export async function getCategoriaPorSlug(
  slug: string,
): Promise<Categoria | null> {
  const { data, error } = await supabase
    .from("categorias")
    .select("id, nombre, slug, descripcion")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(`No se pudo cargar la categoría: ${error.message}`);
  }

  return data as Categoria | null;
}

export async function getProductosPorCategoria(
  categoriaId: number,
): Promise<Producto[]> {
  const { data, error } = await supabase
    .from("productos")
    .select(
      "id, categoria_id, nombre, slug, descripcion, precio, imagen_url, destacado, activo",
    )
    .eq("categoria_id", categoriaId)
    .eq("activo", true)
    .order("nombre");

  if (error) {
    throw new Error(`No se pudieron cargar los productos: ${error.message}`);
  }

  return data as Producto[];
}

export async function getProductoPorSlug(
  slug: string,
): Promise<Producto | null> {
  const { data, error } = await supabase
    .from("productos")
    .select(
      "id, categoria_id, nombre, slug, descripcion, precio, imagen_url, destacado, activo",
    )
    .eq("slug", slug)
    .eq("activo", true)
    .maybeSingle();

  if (error) {
    throw new Error(`No se pudo cargar el producto: ${error.message}`);
  }

  return data as Producto | null;
}
