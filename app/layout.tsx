import StoreProvider from "@/redux/provider";
import "../index.scss";
import GetGeoLocation from "@/components/getGeoLocation";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <GetGeoLocation />
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
