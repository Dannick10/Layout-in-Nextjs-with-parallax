import { StaticImageData } from "next/image"

export default interface Icards {
    idCard: number 
    title: string 
    cardTitle: string 
    cardSub: string 
    img: StaticImageData
    alt: string
}