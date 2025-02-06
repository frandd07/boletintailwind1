export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Mi blog</h1>
        <p className="text-lg text-gray-600">
          Aquí pongo las cosas importantes
        </p>
      </header>

      <main className="flex justify-center items-start gap-6">
        <section className="w-2/3 flex flex-col gap-6">
          {[1, 2, 3].map((id) => (
            <article key={id} className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold">Artículo {id}</h2>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Leer más
              </button>
            </article>
          ))}
        </section>

        <aside className="w-1/3 bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Artículos Relacionados</h3>
          <ul className="space-y-2">
            {["Tema 1", "Tema 2", "Tema 3", "Tema 4"].map((tema, index) => (
              <li key={index}>
                <a href="#" className="text-blue-500 hover:underline">
                  {tema}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}
