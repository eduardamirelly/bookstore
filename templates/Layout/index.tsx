import { ReactNode } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Container } from "../../styles/Container";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
