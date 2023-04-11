import { ReactNode } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Container } from "../../styles/Container";
import { SearchContextProvider } from "../../contexts/searchContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SearchContextProvider>
      <Container>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </SearchContextProvider>
  )
}
