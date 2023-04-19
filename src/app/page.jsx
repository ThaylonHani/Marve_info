import { Characters } from "@/components/Characters";
import { Comics } from "@/components/Comics";
import { Header } from "@/components/Header";
import { Series } from "@/components/Series";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <main className="flex flex-col gap-8 my-4">
        <Comics />
        <Characters />
        <Series/>
      </main>
    </div>
  )
}
