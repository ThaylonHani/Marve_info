export async function PageId({ data, thumb }) {
  return (
    <div className="flex p-8 gap-7 h-[90vh] justify-around items-center ">
      <section>
        <img
          src={`${thumb.path}/portrait_uncanny.jpg`}
          alt="Comic e tals"
          className=" rounded-md select-none"
        />
      </section>
      <section className="w-3/4 h-full flex justify-center items-center text-[var(--Marvel-white)]">
        <img
          src={`${thumb.path}/landscape_incredible.jpg`}
          alt="Comic e tals"
          className=" rounded-md absolute bottom-0 top-0 left-0 right-0 m-auto w-full  -z-10 opacity-10 select-none "
        />

        <section className="flex w-full justify-around gap-6 flex-1 flex-wrap text-center items-baseline h-1/3 ">
         
          {data.dates ?  <section>
            <h2 className="text-2xl font-bold">Publicado:</h2>
             <p className="text-white">
              {data.dates[0].date.slice(8, 10) }/{data.dates[0].date.slice(5, 7) }
              /{data.dates[0].date.slice(0, 4) }
            </p> 
            
          </section> : false}


            {data.creators ? <>
            
              {data.creators.items.find((item) => item.role === "writer") ? (
            <section>
              <h2 className="text-2xl font-bold">Escritor:</h2>
              {data.creators.items.map((item) =>
                item.role === "writer" ? (
                  <p className="text-white ">{item.name}</p>
                ) : (
                  false
                )
              )}
            </section>
          ) : (
            false
          )}

          {data.creators.items.find((item) => item.role === "penciler") ? (
            <section>
              <h2 className="text-2xl font-bold">Pintor:</h2>
              {data.creators.items.map((item) =>
                item.role === "penciler" ? (
                  <p className="text-white ">{item.name}</p>
                ) : (
                  false
                )
              )}
            </section>
          ) : (
            false
          )}

          {data.creators.items.find(
            (item) => item.role === "penciler (cover)"
          ) ? (
            <section>
              <h2 className="text-2xl font-bold">Capa:</h2>
              {data.creators.items.map((item) =>
                item.role === "penciler (cover)" ? (
                  <p className="text-white ">{item.name}</p>
                ) : (
                  false
                )
              )}
            </section>
          ) : (
            false
          )}
          </> : false}
          {data.description || data.variantDescription ? (
            <p className="text-white">
              {data.description || data.variantDescription}
            </p>
          ) : (
            false
          )}

          
        </section>
      </section>
    </div>
  );
}
