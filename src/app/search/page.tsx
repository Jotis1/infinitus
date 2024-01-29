"use client";

import { HeroSection, SearchSection, Products } from "@/components";
import NotQueryOnSearch from "@/components/search/notquery";
import { useQuery } from "@/lib/hooks";

export default function Search() {


    if (!useQuery()) return (<NotQueryOnSearch />)


    return (
        <>
            <HeroSection />
            <SearchSection />
            <Products type="search" />
        </>
    )
}