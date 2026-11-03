export interface Medication {
  code: string;
  name: string;
  brand: string;
  laboratory: string;
  source: "alfabeta";
  price: number;
  presentation: string;
  strength: string;
  updatedAt: string;
}

export type PriceSnapshot = {
  data: Medication[];
  updatedAt: string;
  // true when Alfa Beta failed and the last known prices (or none) are shown
  stale: boolean;
  error?: string;
};
