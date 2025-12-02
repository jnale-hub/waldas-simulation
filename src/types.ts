export type Category = 
  | 'Pagkain' 
  | 'Commodity' 
  | 'Serbisyo' 
  | 'Real Estate' 
  | 'Luho' 
  | 'Politika';

export interface Theme {
  gradient: string;
  button: string;
  buttonHover: string;
  text: string;
  lightBg: string;
  border: string;
  ring: string;
}

export interface Politician {
  id: string;
  name: string;
  title: string;
  netWorth: number;
  image: string;
  theme: Theme;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  desc: string;
  editorial: string;
  discount: number;
}
