import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";

export default async function Home() {
  // Typ für users ist jetzt klar (User[])
  const users: User[] = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 25,
  });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Contact />

        <section className="section" id="signups">
          <h2 className="section-title">Neue Einträge</h2>
          <div className="card" style={{ overflowX: "auto" }}>
            {users.length === 0 ? (
              <p className="lead">Noch keine Einträge. Trag dich oben ein!</p>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: ".5rem" }}>Name</th>
                    <th style={{ textAlign: "left", padding: ".5rem" }}>E-Mail</th>
                    <th style={{ textAlign: "left", padding: ".5rem" }}>Datum</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u: User) => (
                    <tr key={u.id} style={{ borderTop: "1px solid rgba(212,175,55,0.2)" }}>
                      <td style={{ padding: ".5rem" }}>{u.name ?? "—"}</td>
                      <td style={{ padding: ".5rem" }}>{u.email}</td>
                      <td style={{ padding: ".5rem" }}>
                        {new Date(u.createdAt).toLocaleString("de-DE")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
