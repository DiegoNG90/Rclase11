export interface Favorites{
    favorites: Favorite[] | []    // o Array<Favorite>
}

export interface Favorite{
    id: string;
    price: number;
    title: string;
    thumbnail: string;
}