import { IconZoomExclamation } from '@tabler/icons-react'

export default function NotQueryOnSearch() {
    return (
        <section className="p-10 gap-2.5 bg-slate-200 max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center justify-center text-slate-900">
            <p className="text-2xl font-bold">Ups, no has especificado la búsqueda</p>
            <IconZoomExclamation size={80} />
            <p className="text-sm text-slate-700">Escribe primero lo que quieras comprar</p>
        </section>
    )
}