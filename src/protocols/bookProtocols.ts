// export type BookDescription = {
//     name_book: string,
//     author: string,
// }

// export type BookDescriptionId = {
//     name_book: string,
//     author:string,
//     userId:number
// }

export type BookEntity = {
    id: number,
    name: string,
    author: string,
    userId?: number,
    available: boolean,
}

export type Book = Omit<BookEntity, "id" | "available">