"use client"

interface ContactPageProps {}
export function ContactPage(props: ContactPageProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`)
    })

    return null
  }

  return (
    <section className="flex w-full min-h-screen justify-center items-center bg-gradient-to-r from-sky-400 to-cyan-300">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">
              Entre em Contato!
            </h1>
            <p className="pt-2 text-cyan-100 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus odit quod sint provident!
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              icone
              <span>92 98444-6528</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              icone
              <span>julius.caezar25@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              icone
              <span>endereço</span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="">facebook</a>
            <a href="">instagram</a>
            <a href="">linkedin</a>
            <a href="">twitter</a>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="nome">Seu Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu Nome"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                />
              </div>

              <div>
                <label htmlFor="email">Seu Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu Email"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                />
              </div>

              <div>
                <label htmlFor="mensagem">Sua Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Sua Mensagem"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                ></textarea>
              </div>

              <div>
                <label htmlFor="arquivo">Envie um arquivo PDF</label>
                <input
                  type="file"
                  id="arquivo"
                  name="arquivo"
                  accept=".pdf"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                />
              </div>

              <button
                type="submit"
                className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
