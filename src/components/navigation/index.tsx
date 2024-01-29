"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconShoppingCart, IconSearch, IconMenu } from "@tabler/icons-react";

export default function NavBar() {

    const router = useRouter();

    const links = [
        {
            name: "Productos",
            path: "/products"
        },
        {
            name: "Ofertas",
            path: "/categories"
        },
        {
            name: "Soporte",
            path: "/users"
        }
    ];

    const handleSearchSubmit = (data: FormData) => {

        const query = data.get("query");

        if (query) {

            router.push(`/search?query=${query}`);

        }

    };


    return (
        <nav className="sticky z-10 top-0 h-16 text-sm flex justify-between items-center nav-md:px-10 px-5 bg-slate-50">
            <header className="flex gap-10 items-center">
                <Link href={"/"} className="flex items-center gap-2.5">
                    <figure className="flex">
                        <section className="border-[6px] border-slate-950 size-10 rounded-full" />
                        <section className="border-[6px] border-slate-950 size-10 rounded-full -translate-x-[6px]" />
                    </figure>
                    <p className="text-2xl uppercase font-black text-slate-950"> Infinitus</p>
                </Link>
                {links.map((link, index) => (
                    <Link key={index} href={link.path} className="nav-md:block hidden text-slate-900">
                        {link.name}
                    </Link>
                ))}
            </header>
            <footer className="pl-10 grow nav-lg:gap-10 gap-5 flex justify-end items-center text-slate-900">
                <form action={handleSearchSubmit} className="focus-within:grow transition-all nav-md:flex hidden items-center h-9 bg-slate-200 rounded-xl">
                    <button className="size-9 px-2.5 text-slate-500 flex items-center justify-center">
                        <IconSearch size={20} />
                    </button>
                    <input name="query" className="form-input text-sm border-0 focus:ring-0 w-full nav-lg:block hidden bg-transparent placeholder:text-slate-500 pl-2.5 outline-none" type="search" placeholder="Buscar productos..." />
                </form>
                <Link href={"/cart"} className="nav-md:flex hidden items-center gap-2">
                    <IconShoppingCart size={20} />
                    <p className="nav-lg:block hidden truncate">Lista de la compra</p>
                </Link>
                <button className="bg-slate-200 size-9 rounded-full">
                    <figure></figure>
                </button>
                <button className="nav-md:hidden block size-9 rounded-full">
                    <IconMenu size={20} />
                </button>
            </footer>
        </nav>
    )
}