import Link from "next/link"
import axios from "axios"
export function FooterId({ comic }) {

  async function ComicsThumb({id}) {
    const thumb = await fetch(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=624bfb23cdcf59988447a00bebcbfa25&hash=c97d8945bcd9a3cf823b849cd3ac9a35`, { next: { revalidate: 60 } }).then(res => res.json()).then((result) => result.data.results[0].thumbnail.path).catch((err) => console.log(err));
    return (
      <img
      src={`${thumb}/portrait_fantastic.jpg`}
      alt="Comic e tals"
        className=" rounded-md w-32  "
    />
    )
  }
  async function CharactersThumb({id}) {
    const thumb = await fetch(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=624bfb23cdcf59988447a00bebcbfa25&hash=c97d8945bcd9a3cf823b849cd3ac9a35`,{next: {revalidate:60}}).then(res => res.json()).then(res => res.data.results[0].thumbnail.path).catch(err => console.error(err));
    return (
      <img
      src={`${thumb}/portrait_fantastic.jpg`}
      alt="Comic e tals"
        className=" rounded-md w-32 "
    />
    )
  }

  async function SeriesThumb({id}) {
    const thumb = await fetch(`http://gateway.marvel.com/v1/public/series/${id}?ts=1&apikey=624bfb23cdcf59988447a00bebcbfa25&hash=c97d8945bcd9a3cf823b849cd3ac9a35`, { next: { revalidate: 60 } }).then(res => res.json()).then(res => res.data.results[0].thumbnail.path).catch(err => console.error(err));
    return (
      <img
      src={`${thumb}/portrait_fantastic.jpg`}
      alt="Comic e tals"
        className=" rounded-md w-32 "
    />
    )
  }



    return (
        <section className="bg-[var(--Marvel-darkGray)] text-[var(--Marvel-white)]  w-full text-left items-center p-4">
    <h3 className="text-3xl ">Mais informações</h3>

   <div className="flex justify-between p-6 ">
        {comic.format == 'Comic' ? 
   <section className="w-1/2 gap-3 flex flex-col">
     <h3 className="text-2xl ">Mais créditos e informações:</h3>
     <ul>
       <li>
         <strong>Preço:</strong>{" "}
         {comic.prices[0].price == 0
           ? "Gratuito"
           : comic.prices[0].price}
       </li>
       <li>
         <strong>Formato:</strong> {comic.format}
       </li>
       <li>
         <strong>UPC:</strong> {comic.upc}
       </li>
     </ul>
   </section>
   : false   
          }
          
          {comic.creators ? <>
          
            <section className="w-2/4 text-center gap-3 flex flex-col">
     <h3 className="text-2xl ">Equipe:</h3>
     <ul className=" flex flex-col justify-center text-center items-center">
         <li className=" text-center flex flex-col w-1/2">
           <strong>Escritor:</strong>

           {comic.creators.items.map((item) =>
             item.role === "writer" ? `${item.name + ", "}` : false
           )}
         </li>
       

       {comic.creators.items.find((item) => item.role === "inker") ? (
         <li className=" text-center flex flex-col w-1/2">
           <strong>Inker:</strong>

           {comic.creators.items.map((item) =>
             item.role === "inker" ? `${item.name + ", "}` : false
           )}
         </li>
       ) : (
         false
       )}

       {comic.creators.items.find((item) => item.role === "colorist") ? (
         <li className=" text-center flex flex-col w-1/2">
           <strong>Colorista:</strong>

           {comic.creators.items.map((item) =>
             item.role === "colorist" ? `${item.name + ", "}` : false
           )}
         </li>
       ) : (
         false
       )}

       {comic.creators.items.find((item) => item.role === "letterer") ? (
         <li className=" text-center flex flex-col w-1/2">
           <strong>Letrista:</strong>

           {comic.creators.items.map((item) =>
             item.role === "letterer" ? `${item.name + ", "}` : false
           )}
         </li>
       ) : (
         false
       )}

       {comic.creators.items.find((item) => item.role === "editor") ? (
         <li className=" text-center flex flex-col w-1/2">
           <strong>Editor:</strong>

           {comic.creators.items.map((item) =>
             item.role === "editor" ? `${item.name + ", "}` : false
           )}
         </li>
       ) : (
         false
       )}
     </ul>
   </section>

   <section className="w-2/4 text-center gap-3 flex flex-col">
     <h3 className="text-2xl ">Equipe Cover:</h3>
     <ul className=" flex flex-col justify-center text-center items-center">
       <li className=" text-center flex flex-col w-1/2">
         {comic.creators.items.find(
           (element) => element.role == "writer (cover)"
         ) ? (
           <p>
             <strong>Escritor (cover):</strong>
             {comic.creators.items.map((item, idx) =>
               item.role === "writer (cover)"
                 ? `${item.name}` + ", "
                 : false
             )}
           </p>
         ) : (
           false
         )}
       </li>

       <li className=" text-center flex flex-col w-1/2">
         {comic.creators.items.find(
           (element) => element.role == "inker (cover)"
         ) ? (
           <p>
             <strong>Inker (cover):</strong>
             {comic.creators.items.map((item, idx) =>
               item.role === "inker (cover)"
                 ? `${item.name}` + ", "
                 : false
             )}
           </p>
         ) : (
           false
         )}
       </li>

       <li className=" text-center flex flex-col w-1/2">
         {comic.creators.items.find(
           (element) => element.role == "colorist (cover)"
         ) ? (
           <p>
             <strong>Colorist (cover):</strong>
             {comic.creators.items.map((item, idx) =>
               item.role === "colorist (cover)"
                 ? `${item.name}` + ", "
                 : false
             )}
           </p>
         ) : (
           false
         )}
       </li>

       <li className=" text-center flex flex-col w-1/2">
         {comic.creators.items.find(
           (element) => element.role == "letterer (cover)"
         ) ? (
           <p>
             <strong>Letrista (cover):</strong>
             {comic.creators.items.map((item, idx) =>
               item.role === "letterer (cover)"
                 ? `${item.name}` + ", "
                 : false
             )}
           </p>
         ) : (
           false
         )}
       </li>

       <li className=" text-center flex flex-col w-1/2">
         {comic.creators.items.find(
           (element) => element.role == "editor (cover)"
         ) ? (
           <p>
             <strong>Editor (cover):</strong>
             {comic.creators.items.map((item, idx) =>
               item.role === "editor (cover)"
                 ? `${item.name}` + ", "
                 : false
             )}
           </p>
         ) : (
           false
         )}
       </li>

       <li className=" text-center flex flex-col w-1/2">
         {comic.creators.items.find(
           (element) => element.role == "penciler (cover)"
         ) ? (
           <p>
             <strong>Desenhista (cover):</strong>
             {comic.creators.items.map((item, idx) =>
               item.role === "penciler (cover)"
                 ? `${item.name}` + ", "
                 : false
             )}
           </p>
         ) : (
           false
         )}
       </li>
     </ul>
   </section>
          
          </> : false}
   

          </div>
        
        

        {comic.format == 'Comic' || comic.title ? 
      comic.collectedIssues && comic.collectedIssues[0] ?  <div className="flex flex-col gap-3"> 
      <h1 className="text-2xl">
        Mais da coleção:
      </h1>
      <section className="flex gap-4">
      {comic.collectedIssues.map((issue) => {
        

        return (
          <div className="w-full p-3 hover:text-[var(--Marvel-alternative-4)] hover:-translate-y-1 ease-linear duration-100" >
            <Link href={`/comics/${issue.resourceURI.slice(43)}`}>
            <ComicsThumb id={issue.resourceURI.slice(43)}  />
              {issue.name.replaceAll(/\(([\w | \d | -])*|\)/g, "")}
            </Link>
          </div>
        )
      })}
      </section>
    </div> : false
      :  <div className="flex flex-col gap-3"> 
      <h1 className="text-2xl">
        Comics:
      </h1>
      <section className="w-full flex gap-4 overflow-auto">
      {comic.comics.items.map((issue) => {
        

        return (
          <div className="p-3 min-w-[10rem] max-w-[10rem] hover:text-[var(--Marvel-alternative-4)] hover:-translate-y-1 ease-linear duration-100 " >
            <Link href={`/comics/${issue.resourceURI.slice(43)}`}>
              
            <ComicsThumb id={issue.resourceURI.slice(43)}  />
              {issue.name.replaceAll(/\(([\w | \d | -])*|\)/g, "")}
            </Link>
          </div>
        )
      })}
      </section>
    </div>
        }
        {
          comic.characters ?
            <div className="flex flex-col gap-3"> 
          <h1 className="text-2xl">
            Personagens:
          </h1>
          <section className="flex gap-1 overflow-auto">
          {comic.characters.items.map((issue) => {
            

            return (
              <div className="p-3 min-w-[10rem] max-w-[10rem] hover:text-[var(--Marvel-alternative-4)] hover:-translate-y-1 ease-linear duration-100" >
                <Link href={`/characters/${issue.resourceURI.slice(47)}`}>
                  
                <CharactersThumb id={issue.resourceURI.slice(47)}  />
                  {issue.name.replaceAll(/\(([\w | \d | -])*|\)/g, "")}
                </Link>
              </div>
            )
          })}
          </section>
        </div> : false
        }
        {
          comic.series ? <div className="flex flex-col gap-3"> 
          <h1 className="text-2xl">
            Séries:
          </h1>
            {comic.series.items ?
              <section className="flex gap-1 overflow-auto">
          {comic.series.items.map((issue) => {
            

            return (
              <div className="p-3 min-w-[10rem] max-w-[10rem] hover:text-[var(--Marvel-alternative-4)] hover:-translate-y-1 ease-linear duration-100" >
                <Link href={`/series/${issue.resourceURI.slice(43)}`}>
                  
                <SeriesThumb id={issue.resourceURI.slice(43)}  />
                  {issue.name.replaceAll(/\(([\w | \d | -])*|\)/g, "")}
                </Link>
              </div>
            )
          })}
          </section> : false}
          </div> : false
        }

  </section>
    )
} 