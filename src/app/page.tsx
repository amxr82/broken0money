import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

// einfacher, lokaler Typ – unabhängig von @prisma/client
type UserRow = {
  id: string;
  name: string | null;
  email: string;
  createdAt: Date | string;
};

export default async function Home() {
  const users = (await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 25,
  })) as unknown as UserRow[];

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
                  {users.map((u: UserRow) => (
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
