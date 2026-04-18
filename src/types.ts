export type Tab = 'home' | 'store' | 'scan' | 'profile' | 'checkout';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'vegetables' | 'fruits' | 'dairy' | 'bakery' | 'seasonal';
  image: string;
  tag?: string;
  unit: string;
  isEcoChoice?: boolean;
  isRefillable?: boolean;
}

export interface Activity {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  type: 'gain' | 'expense';
  date: string;
  icon: string;
  color: string;
}

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  description: string;
  co2Saved: number;
}
