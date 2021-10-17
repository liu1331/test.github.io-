
export interface IProduct{
    productName: string;
    price: number;
    img: string;
    inBasket: boolean;
    totalPrice?: number;
    discount: string | ''
}