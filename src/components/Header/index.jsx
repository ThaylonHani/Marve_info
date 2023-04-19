import Link from "next/link";

export function Header() {
    return (
        <header className="bg-[var(--Marvel-color-3)] p-4 flex justify-between items-center" >
            <Link href="/">
            <h1 className="font-bold text-2xl text-[var(--Marvel-white)] w-fit">
                Marvel<strong className="font-thin ">Info</strong>
                </h1>
            </Link>
           
            <ul className="flex gap-3 text-[var(--Marvel-white)] cursor-pointer">
                <li>
                    <Link href={'/about'}>
                    Sobre
                    </Link>
                </li>
            </ul>
        </header>
    )
}