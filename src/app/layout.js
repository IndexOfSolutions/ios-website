export const metadata = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {children}
    </html>
  );
}
