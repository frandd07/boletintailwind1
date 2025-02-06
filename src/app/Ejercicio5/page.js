export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full bg-whatsappDark text-white p-4 shadow-lg z-10">
        <h1 className="text-xl font-semibold">WhatsApp Estadísticas</h1>
      </nav>

      <div className="flex flex-grow pt-16">
        <aside className="w-64 bg-backgroundDark text-white p-6 hidden md:block">
          <nav>
            <ul className="space-y-4">
              <li className="hover:bg-whatsappDark p-2 rounded cursor-pointer">
                Inicio
              </li>
              <li className="hover:bg-whatsappDark p-2 rounded cursor-pointer">
                Chats
              </li>
              <li className="hover:bg-whatsappDark p-2 rounded cursor-pointer">
                Grupos
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-whatsappGreen p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-lg font-bold">Mensajes enviados</h2>
              <p className="text-whatsappLight">1209862</p>
            </div>

            <div className="bg-whatsappGreen p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-lg font-bold">Mensajes recibidos</h2>
              <p className="text-whatsappLight">4352415</p>
            </div>

            <div className="bg-whatsappGreen p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-lg font-bold">Grupos</h2>
              <p className="text-whatsappLight">45</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Conversaciones</h2>
            <table className="w-full text-left border-collapse border border-whatsappGreen">
              <thead>
                <tr className="bg-whatsappDark text-white">
                  <th className="p-3 border border-whatsappGreen">Teléfono</th>
                  <th className="p-3 border border-whatsappGreen">Mensajes</th>
                  <th className="p-3 border border-whatsappGreen">
                    Elementos multimedia
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 border border-whatsappGreen">
                    +34 612 345 678
                  </td>
                  <td className="p-3 border border-whatsappGreen">152</td>
                  <td className="p-3 border border-whatsappGreen">20</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border border-whatsappGreen">
                    +52 987 654 321
                  </td>
                  <td className="p-3 border border-whatsappGreen">89</td>
                  <td className="p-3 border border-whatsappGreen">12</td>
                </tr>
                <tr>
                  <td className="p-3 border border-whatsappGreen">
                    +1 555 666 777
                  </td>
                  <td className="p-3 border border-whatsappGreen">230</td>
                  <td className="p-3 border border-whatsappGreen">35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
