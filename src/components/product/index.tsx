import ProductSection from "./section";
import ProductCard from "./card";
import { Key } from "react";

export interface ProductSection {
    type: "recently-viewed" | "popular" | "recommended" | "similar" | "search";
}

export default function Products({ type }: ProductSection) {

    const products = {
        "recently-viewed": [
            { name: "Abrigo Nightforce", price: 79.99 },
            { name: "Camisa Nightforce", price: 29.99 },
            { name: "Pantalón Nightforce", price: 39.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Pantalón Nightforce", price: 39.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
        ],
        "popular": [
            { name: "Abrigo Nightforce", price: 79.99 },
            { name: "Camisa Nightforce", price: 29.99 },
            { name: "Pantalón Nightforce", price: 39.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
        ],
        "recommended": [
            { name: "Abrigo Nightforce", price: 79.99 },
            { name: "Camisa Nightforce", price: 29.99 },
            { name: "Pantalón Nightforce", price: 39.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
        ],
        "similar": [
            { name: "Abrigo Nightforce", price: 79.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Camisa Nightforce", price: 29.99 },
            { name: "Pantalón Nightforce", price: 39.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
        ],
        "search": [
            { name: "Abrigo Nightforce", price: 79.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Camisa Nightforce", price: 29.99 },
            { name: "Pantalón Nightforce", price: 39.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
            { name: "Zapatillas Nightforce", price: 69.99 },
        ]
    }

    return (
        <ProductSection type={type}>
            {products[type].map((product: { name: string; price: number; }, index: Key | null | undefined) => (
                <ProductCard key={index} name={product.name} price={product.price} />
            ))}
        </ProductSection>
    )
}