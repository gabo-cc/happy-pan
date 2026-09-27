export interface Categoria {
    id: number;
    nombre: string;
    slug: string;
    descripcion: string;
}

export interface Producto {
    id: number;
    categoria_id: number;
    nombre: string;
    slug: string;
    descripcion: string;
    precio: number;
    imagen_url: string | null;
    destacado: boolean;
    activo: boolean;
}
