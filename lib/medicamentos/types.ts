export interface Medicamento {
  codigo: string;
  nombre: string;
  marca: string;
  laboratorio: string;
  source: "farmacity";
  precio: number;
  presentacion: string;
  concentracion: string;
  fechaActualizacion: string;
}

export type PreciosSnapshot = {
  data: Medicamento[];
  updatedAt: string;
  // true cuando Farmacity falló y se muestran los últimos precios conocidos (o ninguno)
  stale: boolean;
  error?: string;
};
