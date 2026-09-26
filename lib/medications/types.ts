export interface Medication {
  code: string;
  name: string;
  brand: string;
  laboratory: string;
  source: "farmacity";
  price: number;
  presentation: string;
  strength: string;
  updatedAt: string;
}

export type PriceSnapshot = {
  data: Medication[];
  updatedAt: string;
  // true when Farmacity failed and the last known prices (or none) are shown
  stale: boolean;
  error?: string;
};
