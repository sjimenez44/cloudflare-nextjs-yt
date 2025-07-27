import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <div className="w-screen min-h-screen bg-slate-900 flex">
        <div className="w-fit mx-auto md:max-w-[1200px] text-white py-20 flex flex-col gap-6 [&>*]:mx-auto">
          <h1 className="text-4xl font-bold">CloudFlare - Next.js Deployment Example</h1>
          
          <div className="flex flex-col gap-4 md:flex-row">
            <Link 
              href="/ia" 
              className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg text-center"
            >
              🧠 Ir a IA
            </Link>
            <Link 
              href="/graciasia" 
              className="bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg text-center"
            >
              🙏 Gracias IA
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}