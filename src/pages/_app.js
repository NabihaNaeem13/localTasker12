import { Footer } from '../Component/Footer'
import { Header } from '../Component/Header'
import "../globals.css";
import "./style/footer.css";
import "./style/header.css";
import "./style/home.css";
import "./style/whoweare.css";

const MyApp = ({ Component, pageProps }) => {
  return (
      <>
      <Header/>
      <main className='main-containerbox'>
      <Component {...pageProps} />
       </main>
      <Footer/>
      </>
  );
};

export default MyApp;