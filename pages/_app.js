import '../styles/globals.css'
import Script from 'next/script'

import { useEffect } from "react";

const App = ({ Component, pageProps, router }) => {

  // Used to Handle Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-2H2KGMVMSS", {
        page_path: url,
      });
    };

    // Subscribe to the change event
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return(
    <>

      {/* Google Analytics Stuff.  Questions? Watch This: https://www.youtube.com/watch?v=m7oQSA3c31Q*/}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2H2KGMVMSS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2H2KGMVMSS');
        `}
      </Script>
      <Component {...pageProps} />
    
    </>
  )
}

export default App
