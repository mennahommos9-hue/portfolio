import { createFileRoute } from "@tanstack/react-router";
import { BackToTop, Cursor, Footer, Nav } from "@/components/portfolio/Chrome";
import { About, Contact, Education, Experience, Hero, Projects, Services, Skills } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Menna Mohamed Hommos — Backend Developer Portfolio" },
      { name: "description", content: "Menna Mohamed Hommos turns ideas into secure, reliable, scalable backends with REST APIs, databases and authentication." },
      { property: "og:title", content: "Menna Mohamed Hommos — Backend Developer" },
      { property: "og:description", content: "I Turn Ideas into Powerful Backends. REST APIs, PostgreSQL, secure authentication." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
