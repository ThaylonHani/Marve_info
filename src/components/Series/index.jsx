import axios from "axios";
import Link from "next/link";

export async function Series() {

  const series = await fetch(`http://gateway.marvel.com/v1/public/series?ts=1&apikey=624bfb23cdcf59988447a00bebcbfa25&hash=c97d8945bcd9a3cf823b849cd3ac9a35`, {next: {revalidate: 60}}).then(res => res.json()).then(response => response.data.results)
  
  
    return (
        <div className="text-center items-center justify-center flex flex-col gap-5">

            <h1 className="text-[var(--Marvel-white)] text-xl">
                Series:
        </h1>

        <div className="border-2 border-[var(--Marvel-color-3)] text-[var(--Marvel-white)] w-11/12 items-center rounded-md ">
                <ul className="flex w-full h-2/4  overflow-auto  snap-x  ">
                    
                    {series.map((series) => {
            return (
              <li className="flex flex-col w-full items-left p-7 hover:text-[var(--Marvel-alternative-4)] hover:-translate-y-1 ease-linear duration-100 snap-end">
                <Link href={`/series/${series.id}`}>
                  <p className="font-bold text-xs self-left">{series.id}</p>
                  <img
                    src={`${series.thumbnail.path}/portrait_fantastic.jpg`}
                    alt={`Foto de ${series.name} `}
                    className="w-40 h-fit  rounded-md"
                  />
                  <h3 className=" w-40 text-left">
                    {series.title}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
            
        </div>
    )
}