import localFont from 'next/font/local';
import '../(public)/globals.css';

const newake = localFont({
  src: '../../../public/assets/fonts/Newake.woff2',
  variable: '--font-newake',
});

const inter = localFont({
  src: '../../../public/assets/fonts/Inter.woff2',
  variable: '--font-inter',
});

const jetBrainsMono = localFont({
  src: '../../../public/assets/fonts/JetBrainsMono.woff2',
  variable: '--font-jetBrainsMono',
});

export default function AdminLayout({ children }) {
  return (
    <div className={`${newake.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      {children}
    </div>
  );
}
