"use client";
import { IconAdjustmentsFilled } from "@tabler/icons-react";
import { useQuery } from "@/lib/hooks";

export default function Filters() {

    const prices = [
        "Ascendente",
        "Descendente",
    ]

    const styles = [
        "Techware",
        "Nextrend",
        "Corpo",
        "Entropism",
        "Kitsch",
        "Neomilitarism",
        "Neokitsh",
    ]

    const types = [
        "Abrigo",
        "Blusa",
        "Camisa",
        "Camiseta",
        "Chaqueta",
        "Jersey",
        "Pantalón",
        "Polo",
        "Sudadera",
        "Zapatillas",
    ];

    return (
        <nav className="flex gap-2.5 text-sm w-full justify-end items-center max-w-5xl mx-auto">
            <p>4 resultados para <span className="font-semibold">"{useQuery()}"</span></p>
            <select className={`cursor-pointer border-0 *:font-sans focus:ring-0 text-sm h-9 w-36 flex items-center px-4 bg-slate-200 rounded-xl`}>
                <option defaultChecked>Precio</option>
                {prices.map((price, index) => (
                    <option key={index} value={index}>{price}</option>
                ))}
            </select>
            <select className={`cursor-pointer border-0 *:font-sans focus:ring-0 text-sm h-9 w-36 flex items-center px-4 bg-slate-200 rounded-xl`}>
                <option defaultChecked>Estilo</option>
                {styles.map((style, index) => (
                    <option key={index} value={index}>{style}</option>
                ))}
            </select>
            <select className={`cursor-pointer border-0 *:font-sans focus:ring-0 text-sm h-9 w-36 flex items-center px-4 bg-slate-200 rounded-xl`}>
                <option defaultChecked>Prenda</option>
                {types.map((type, index) => (
                    <option key={index} value={index}>{type}</option>
                ))}
            </select>
            <button className="flex items-center gap-2.5 h-9 px-4 bg-slate-200 rounded-xl">
                <p>Todos los filtros</p>
                <IconAdjustmentsFilled size={20} />
            </button>
        </nav>
    )
}