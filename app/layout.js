export const metadata = {
  title: "EVERNIGHT SHOP",
  description: "Cyber Futuristic Anime Landing"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark">
      <body>{children}</body>
    </html>
  );
}