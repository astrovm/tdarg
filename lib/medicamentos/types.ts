export interface Medicamento {
  codigo: string;
  nombre: string;
  marca: string;
  laboratorio: string;
  source: "farmacity" | "alfabeta";
  precio: number;
  presentacion: string;
  concentracion: string;
  fechaActualizacion: string;
}
