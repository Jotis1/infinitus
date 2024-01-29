export default function Categories() {

    const categories = [
        "Techware",
        "Nextrend",
        "Corpo",
        "Entropism",
        "Kitsch",
        "Neomilitarism",
        "Neokitsh",
    ]

    return (
        <section className="p-12 pb-0 mx-auto text-zinc-900 w-full">
            <p>Categorías populares</p>
            <section className="flex pt-5 gap-5 overflow-auto items-center justify-between">
                {categories.map((category, index) => (
                    <article key={index} className="h-72 min-w-52 rounded-xl bg-slate-200 flex py-10 justify-center px-2.5">
                        <p className="font-extrabold uppercase text-xl">{category}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}