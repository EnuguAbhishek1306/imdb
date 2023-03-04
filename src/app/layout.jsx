import Header from "./components/Header";
import Navbar from "./components/navbar";
import SearchBox from "./components/SearchBox";
import "./globals.css";
import Provider from "./Provider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/*header*/}
          <Header />
          <Navbar/>
          {/*nav bar */}
          
          {/*Search*/}
          <SearchBox/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
