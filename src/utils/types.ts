export type MenuType = {
    id:number;
    name:string;
    image:string;
    content?:Content[]
}

export type Content ={  // eklemek istediginde kullanmak icin
    id:number;
    name:string;
    image:string
}
