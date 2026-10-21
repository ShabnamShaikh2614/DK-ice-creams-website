export type Category = 
  | 'all' 
  | 'juices' 
  | 'faloodas' 
  | 'mastani' 
  | 'icecreams' 
  | 'lassi';

export interface MenuItem {
  id: string;
  name: string;
  marathiName?: string;
  category: Category;
  price: number;
  description: string;
  ingredients: string[];
  tag?: string;
  isPopular?: boolean;
  isSeasonal?: boolean;
  isSugarFreeAvailable?: boolean;
  accentColor: string;
  imageUrl?: string;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  customizationNotes?: string;
}

export interface CustomFaloodaLayer {
  syrup: string;
  syrupColor: string;
  noodles: boolean;
  sabjaSeeds: boolean;
  rabdi: boolean;
  jelly: boolean;
  scoop1: string;
  scoop2: string;
  toppings: string[];
  totalPrice: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  favoriteItem: string;
}

export interface Landmark {
  name: string;
  marathiName: string;
  distance: string;
  timeByBike: string;
  timeByWalk: string;
  description: string;
}
