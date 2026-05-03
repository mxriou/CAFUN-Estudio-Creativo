export interface Producto {
  slug: string;
  nombre: string;
  precio: number;
  imagenes: string[];
  disponibles?: number;
  dimensiones?: string;
  formato?: string;
  material?: string;
  certificado?: boolean;
  descripcion?: string;
  categoria: string;
}

export const productos: Producto[] = [
  {
    slug: 'chamarra-mezclilla',
    nombre: 'Chamarra de Mezclilla',
    precio: 4500,
    imagenes: ['/Chamarras/chamarra1.png'],
    disponibles: 8,
    material: 'Mezclilla',
    categoria: 'Colecciones',
    descripcion: 'Chamarra de mezclilla con diseño exclusivo de Cafun Estudio Creativo. Pieza de edición limitada con acabados artesanales.',
  },
  {
    slug: 'chamarra-2',
    nombre: 'Chamarra 2',
    precio: 4500,
    imagenes: ['/Chamarras/chamarra2.png'],
    disponibles: 5,
    material: 'Tela',
    categoria: 'Colecciones',
    descripcion: 'Chamarra de edición limitada con diseño exclusivo. Intervenida a mano por artistas de Cafun Estudio Creativo.',
  },
  {
    slug: 'chamarra-3',
    nombre: 'Chamarra 3',
    precio: 4500,
    imagenes: ['/Chamarras/chamarra3.png'],
    disponibles: 10,
    material: 'Tela',
    categoria: 'Colecciones',
    descripcion: 'Chamarra de colección con diseño artístico intervenido. Cada pieza es única e irrepetible.',
  },
  {
    slug: 'chamarra-vintag',
    nombre: 'Chamarra Vintag',
    precio: 5200,
    imagenes: ['/Chamarras/Colecciones/chamarra2.png'],
    disponibles: 8,
    material: 'Tela',
    categoria: 'Colecciones',
    descripcion: 'Chamarra vintage de edición limitada. Intervenida a mano por artistas de Cafun Estudio Creativo.',
  },
  {
    slug: 'chamarra-negra',
    nombre: 'Chamarra Negra',
    precio: 5900,
    imagenes: ['/Chamarras/Colecciones/chamarra3.png'],
    disponibles: 0,
    material: 'Tela',
    categoria: 'Colecciones',
    descripcion: 'Chamarra negra de colección con diseño artístico exclusivo. Cada pieza es única e irrepetible.',
  },
  {
    slug: 'rosa-de-media-luna',
    nombre: 'Rosa de Media Luna',
    precio: 50000,
    imagenes: ['/Pinturas/pinturas1.jpg'],
    dimensiones: '100 x 150 cm',
    material: 'Óleo/Loneta',
    certificado: true,
    categoria: 'Pinturas',
    descripcion: 'Una obra única que captura la delicadeza de la rosa en el crepúsculo. Pieza certificada con número de serie.',
  },
];

export const getProducto = (slug: string): Producto | undefined =>
  productos.find((p) => p.slug === slug);
