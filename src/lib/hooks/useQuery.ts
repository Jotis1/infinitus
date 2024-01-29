"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function useQuery() {

    const [query, setQuery] = useState("");
    const params = useSearchParams();
    const q = params.get("query");

    useEffect(() => {
        if (q) {
            setQuery(q);
        }
    });

    return query;
}
