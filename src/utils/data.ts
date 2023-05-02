import image from '../components/assets/kahvalti.webp';
import image1 from '../components/assets/salata.webp';
import image2 from '../components/assets/pizza.webp';
import image3 from '../components/assets/tatli.webp';
import image4 from '../components/assets/tost.webp';
import image5 from '../components/assets/icecek.webp';
import { MenuType } from './types';

export const menus: MenuType[] = [
    {
        id: 1,
        name: "Kahvaltı",
        image: image,
        content: [   
            {
                id:8,
                name:"Mıhlama",
                image:"https://iaftm.tmgrup.com.tr/f24f14/1200/627/0/408/1080/972?u=https://iftm.tmgrup.com.tr/2021/10/12/mihlama-nasil-yapilir-iste-mihlama-kuymak-tarifi-1634027608684.jpeg"
            }
        ]
    },
    {
        id: 2,
        name: "Salata",
        image: image1,
    },
    {
        id: 3,
        name: "Pizza",
        image: image2,
    },

    {
        id: 4,
        name: "Tatli",
        image: image3,
    },
    {
        id: 5,
        name: "Tost",
        image: image4,
    },
    {
        id: 6,
        name: "Icecek",
        image: image5,
    },
]
