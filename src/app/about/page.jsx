import { Header } from "@/components/Header";
import Link from "next/link";
export default function About() {
    return (
        <div className="text-center text-[var(--Marvel-white)]">
            <Header/>
            <p className="text-3xl  my-12 ">
                Página onde lista comics,séries e personagens da marvel. Há algumas informações que não estão completas, por conta da própria api que está se desenvolvendo ainda, ainda não há um fator de busca. 
            </p>
            <section className="text-center flex flex-col gap-5">

            <p className="text-2xl">
                Para ver um personagem <Link href={`/characters/1009610`} className="underline text-[var(--Marvel-alternative-4)]"> clique aqui </Link> 
            </p>
            
            <p className="text-2xl">
                Para ver uma comic <Link href={`/comics/30090`} className="underline text-[var(--Marvel-alternative-4)]"> clique aqui </Link> 
                </p>
                
            <p className="text-2xl">
                Para ver uma série <Link href={`/series/9085`} className="underline text-[var(--Marvel-alternative-4)]"> clique aqui </Link> 
            </p>
            
            </section>
        </div>
    )
}