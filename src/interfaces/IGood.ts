interface IGood {
  id: number;
  title: string;
  description: string;
  price: number;
  volume: number;
  size: string;
  brand: string;
  manufacturer: string;
  category: Array<string>;
  subCategory: Array<string>;
  images: string;
}

export default IGood;
