import { FooterId } from "@/components/footerId";
import { PageId } from "@/components/pageId";
import axios from "axios";
import Link from "next/link";

export default async function CharacterId({params}) {

  
  const character = await fetch(`http://gateway.marvel.com/v1/public/characters/${params.id}?ts=1&apikey=624bfb23cdcf59988447a00bebcbfa25&hash=c97d8945bcd9a3cf823b849cd3ac9a35`, { next: { revalidate: 60 } }).then(res => res.json()).then(response => response.data.results).then(res => res[0]).catch(err => console.error(err));
    
  
    
        return (
            <div>
              <section className="flex bg-[var(--Marvel-darkGray)] text-[--Marvel-alternative-4] p-4">
                <Link href="/">Home</Link>
                <h1 className="mx-auto font-bold text-xl">{character.title || character.name }</h1>
              </section>
              <PageId data={character} thumb={character.thumbnail} />
             <FooterId comic={character}/>
            </div>
          );
    
}