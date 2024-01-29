import { ProductSection } from "../index";

export default function ProductSection({ type, children }: ProductSection & { children: React.ReactNode }) {

    const title = {
        "recently-viewed": "Vistos recientemente",
        "popular": "Populares",
        "recommended": "Recomendados",
        "similar": "Similares",
        "search": "Resultados de búsqueda"
    }

    return (
        <section className="p-12 pb-0">
            <p>{title[type]}</p>
            <section className="flex gap-5 flex-wrap pt-5 items-center justify-between">
                {children}
            </section>
        </section>
    )
}