import { iAddress } from './address'

export interface iProducts{
    id: string;
    title: string;
    price: number;
    available_quantity: number;
    condition: string;
    thumbnail: string;
    address: iAddress;
}