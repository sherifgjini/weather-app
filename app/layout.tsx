import StoreProvider from "@/redux/provider";
import "../index.scss";
import GetGeoLocation from "@/components/getGeoLocation";

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
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
