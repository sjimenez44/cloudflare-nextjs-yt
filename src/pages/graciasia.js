import React from 'react'
import Head from 'next/head'

export default function GraciasIAPage() {
  return (
    <>
      <Head>
        <title>Gracias por tu interés</title>
      </Head>
      <div className="w-screen min-h-screen bg-slate-900 flex">
        <div className="w-fit mx-auto md:max-w-[1200px] text-white py-20 flex flex-col gap-6 [&>*]:mx-auto">
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h1 className="text-3xl font-bold mb-6 text-center">
                Dentro de poco recibirás un correo explicando cómo acceder a la información.
              </h1>
              
              <h2 className="text-2xl font-bold mb-4">Los pasos siguientes son:</h2>
              
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">1.</span>
                  <span>Abrir el correo (si no lo encuentras revisa en Spam o en promociones)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">2.</span>
                  <span>Seguir las instrucciones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">3.</span>
                  <span>Crear videos potentes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 