export interface Order {
  _id: string;
  products: {
    productId: {
      ProductName: string;
      ProductPhoto: string;
    };
    quantity: number;
  }[];
  totalAmount: number;
  orderDeliveryDate?: Date;
}
