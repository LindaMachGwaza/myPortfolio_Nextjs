import Layout from '../components/Layout';
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import Script from 'next/script';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

//all components are surrounded inside of the layout components and it's displayed by the App function
//the component page properties have been outputted in the Layout component
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
    <Script
      id='google-analytics'
      strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        
        `}
      
    </Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
};

export default MyApp;

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Alvarotrigo.com, You Tube, Google.com*/
