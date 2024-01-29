"use client";
import Link from "next/link"
import { IconMinus, IconPlus, IconStar } from "@tabler/icons-react";
import { useState } from "react";

export default function Products(head: { params: { name: string } }) {

    const params = decodeURIComponent(head.params.name)
    const [units, setUnits] = useState(0);
    const [stars, setStars] = useState(0);

    const aviableColors = [
        "bg-yellow-500",
        "bg-red-500",
        "bg-rose-500",
        "bg-blue-500",
    ]

    const aviableSizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
    ]

    const handleMinusUnits = (units: number) => {
        if (units > 0) {
            setUnits(units - 1)
        }
    }

    return (
        <main className="px-40 flex flex-col gap-5">
            <nav className="text-sm font-medium text-slate-500 flex gap-1">
                <Link href={"/"}>
                    Nextrend /
                </Link>
                <Link href={"/"}>
                    Partes de arriba /
                </Link>
                <Link href={"/"} className="font-bold text-slate-900">
                    Abrigos
                </Link>
            </nav>
            <article className="flex flex-wrap gap-5">
                <aside className="grow flex flex-col gap-5">
                    <figure className="w-[500px] aspect-w-16 aspect-h-9 rounded-xl bg-slate-200"></figure>
                    <footer className="w-full flex justify-around items-center gap-5">
                        <figure className="size-52 rounded-xl bg-slate-200"></figure>
                        <figure className="size-52 aspect-1 rounded-xl bg-slate-200"></figure>
                        <figure className="size-52 aspect-1 rounded-xl bg-slate-200"></figure>
                    </footer>
                </aside>
                <aside className="grow text-slate-900">
                    <section className="px-5 flex flex-col gap-2.5 pb-5 border-b-2 border-slate-200">
                        <p className="text-4xl font-black">{params}</p>
                        <p className="text-sm text-slate-500 font-medium">La perfecta combinación entre el dorado y el negro</p>
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
                    </section>
                    <section className="px-5 flex flex-col gap-2.5 py-5 border-b-2 border-slate-200">
                        <p className="text-3xl font-extrabold">79.99€</p>
                    </section>
                    <section className="px-5 flex flex-col gap-5 py-5 border-b-2 border-slate-200">
                        <p>Elige un color</p>
                        <section className="flex gap-5 items-center">
                            {aviableColors.map((color, index) =>
                                <section key={index}>
                                    <input id={color} type="radio" name="color" className={`peer hidden`} />
                                    <button
                                        onClick={() => document.getElementById(color)?.click()}
                                        className={`transition-all ${color} peer-checked:ring-blue-500 border-0 appearance-none ring-2 ring-offset-2 ring-offset-white ring-slate-200 size-9 rounded-full`} />
                                </section>
                            )}
                        </section>
                    </section>
                    <section className="px-5 flex flex-col gap-5 py-5 border-b-2 border-slate-200">
                        <p>Elige una talla</p>
                        <section className="flex gap-5 items-center">
                            {aviableSizes.map((size, index) =>
                                <section key={index}>
                                    <input id={size} type="radio" name="size" className={`peer hidden`} />
                                    <button
                                        onClick={() => document.getElementById(size)?.click()}
                                        className="transition-all  peer-checked:ring-blue-500 border-0 appearance-none ring-2 ring-offset-2 ring-offset-white ring-slate-200 size-9 rounded-xl text-center bg-slate-200 text-sm font-medium"> {size}</button>
                                </section>
                            )}
                        </section>
                        <p className="font-medium text-sm text-blue-500 decoration-2 decoration-blue-500 underline underline-offset-2">Consulta la guía de tallas</p>
                    </section>
                    <section className="px-5 text-slate-900 flex flex-col gap-5 py-5">
                        <section className="w-fit h-9 *:h-full flex items-center rounded-xl overflow-hidden bg-slate-200 text-slate-900">
                            <button onClick={() => handleMinusUnits(units)} className="w-12 flex items-center justify-center border-r border-slate-300">
                                <IconMinus size={16} />
                            </button>
                            <p className="w-20 text-sm font-medium justify-center flex items-center">{units}</p>
                            <button onClick={() => setUnits(units + 1)} className="w-12 flex items-center justify-center border-l border-slate-300">
                                <IconPlus size={16} />
                            </button>
                        </section>
                        <section className="*:text-sm w-fit gap-2.5 h-9 *:h-full flex items-center *:rounded-xl">
                            <button className="border-2 hover:bg-slate-900 hover:text-white transition-all border-slate-900 px-5 flex items-center justify-center">
                                Añadir al carrito
                            </button>
                            <button className="border-2 border-slate-900  bg-slate-900 hover:bg-white hover:text-slate-900 transition-all text-white px-5 flex items-center justify-center">
                                Comprar ahora
                            </button>
                        </section>
                    </section>
                </aside>
            </article>
        </main>
    )
}