"use client";
import { useState } from "react";
import Link from "next/link";

import { IconHeart, IconStar } from "@tabler/icons-react"

export default function ProductCard({ name, price }: { name: string, price: number }) {

    const [isFavorite, setIsFavorite] = useState(false);
    const [stars, setStars] = useState(0);
    const [isOnCart, setIsOnCart] = useState(false);

    return (
        <Link href={`/product/${name}`} className="flex w-64 mx-auto flex-col gap-2.5 text-sm text-slate-900">
            <figure className="relative size-64 rounded-xl bg-slate-200">
                <button onClick={() => setIsFavorite(!isFavorite)} className={`transition-all ${isFavorite ? "bg-red-500" : "bg-white"} absolute flex items-center justify-center top-5 right-5 size-9 rounded-full `}>
                    <IconHeart className={`${isFavorite ? "fill-white stroke-white" : "stroke-slate-900"}`} size={20} />
                </button>
            </figure>
            <footer className="flex flex-col gap-2.5 py-2.5 px-2">
                <section className="transition-all flex font-bold items-center justify-between">
                    <p className="truncate">{name}</p>
                    <p>{price}€</p>
                </section>
                <p className="truncate text-xs text-slate-700 font-medium">Negro, dorado, certificado disponible</p>
                <section className="flex items-center gap-2">
                    <section className="flex flex-row-reverse items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <button onClick={() => setStars(5 - i)} key={5 - i} className={`${stars >= (5 - i) && "*:fill-green-500 *:stroke-green-500"} *:transition-all peer peer-hover:*:fill-green-500 peer-hover:*:stroke-green-500 hover:*:fill-green-500 hover:*:stroke-green-500 size-5`}>
                                <IconStar className="fill-white stroke-slate-900" size={20} />
                            </button>
                        ))}
                    </section>
                    <p className="font-medium text-xs">{"(901)"}</p>
                </section>
                <button onClick={() => setIsOnCart(!isOnCart)} className={`${isOnCart && "bg-slate-900 text-white"} hover:bg-slate-900 hover:text-white transition-all h-9 mt-2 font-medium px-2.5 border-2 border-slate-950 rounded-xl`}>
                    {isOnCart ? "Quitar del carrito" : "Añadir al carrito"}
                </button>
            </footer>
        </Link>
    )
}