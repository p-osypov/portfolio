import '@/assets/style/globals.css';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LocalStorageProvider } from '@/context/local-storage';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalStorageProvider>
      <Component {...pageProps} />
      <ToastContainer theme="dark" autoClose={5000} />
    </LocalStorageProvider>
  );
}
