import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import videoData from '../data/videos.json'

export default function IAPage() {
  const router = useRouter()
  const [content, setContent] = useState({
    title: videoData.default.title,
    description: videoData.default.description
  })
  const [isValidVideo, setIsValidVideo] = useState(true)

  useEffect(() => {
    // Get w_video query parameter
    const { w_video } = router.query
    
    if (w_video && videoData.videos[w_video]) {
      // If video exists in JSON, use its data
      setContent({
        title: videoData.videos[w_video].title,
        description: videoData.videos[w_video].description
      })
      setIsValidVideo(true)
    } else if (w_video && !videoData.videos[w_video] || w_video === undefined) {
      // If w_video parameter exists but is invalid
      setContent({
        title: videoData.default.title,
        description: videoData.default.description
      })
      setIsValidVideo(false) // Hide form for invalid video
    }
  }, [router.query])

  useEffect(() => {
    // Tally script - optimized loading
    if (isValidVideo) {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      const v = function() {
        if ("undefined" != typeof Tally) Tally.loadEmbeds();
        else d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) { 
          e.src = e.dataset.tallySrc; 
        });
      };
      if ("undefined" != typeof Tally) v();
      else if (d.querySelector('script[src="' + w + '"]') == null) {
        const s = d.createElement("script");
        s.src = w; 
        s.async = true;
        s.onload = v; 
        s.onerror = v;
        d.body.appendChild(s);
      }
    }
  }, [isValidVideo]);

  return (
    <>
      <Head>
        <title>Formulario</title>
      </Head>
      <div className="w-screen min-h-screen bg-slate-900 flex">
        <div className="w-fit mx-auto md:max-w-[1200px] text-white py-20 flex flex-col gap-6 [&>*]:mx-auto">
          <h1 className="text-4xl font-bold text-center">{content.title}</h1>
          <p className="text-center">{content.description}</p>
        
        {isValidVideo ? (
        <div className="w-full max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-lg border-4 border-gray-400">
            <div className="w-full">
                <iframe 
                  data-tally-src="https://tally.so/embed/wAePKB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="eager" 
                  title="Guía"
                  className="w-full min-h-[400px] border-0 rounded-lg"
                  style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                  onLoad={(e) => {
                    e.target.style.opacity = 1;
                  }}
                />
            </div>
          </div>
        </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto mt-12">
            <div className="bg-slate-800 p-8 rounded-lg border-2 border-gray-600">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">🚧 Trabajando en nuevas guías 🚧</h2>
                <p className="text-lg mb-6">
                  Estamos desarrollando nuevas guías que te servirán para crecer tu canal. 
                </p>
              </div>
            </div>
          </div>
        )}
      </div>  
    </div>
    </>
  )
} 