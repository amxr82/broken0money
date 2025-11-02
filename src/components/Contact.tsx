import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default function Contact() {
  // Server Action: läuft auf dem Server und spricht direkt Prisma an
  async function handleSignup(formData: FormData) {
    "use server";
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!email) return;

    // User anlegen oder updaten (falls E-Mail schon existiert)
    await prisma.user.upsert({
      where: { email },
      update: { name: name || null },
      create: { email, name: name || null },
    });

    // Startseite neuladen, damit der Eintrag in der Liste erscheint
    revalidatePath("/");
  }

  return (
    <section id="kontakt" className="section cta">
      <h2 className="section-title">
        Finanzen verstehen <br />
        <span className="inline-accent">leicht gemacht.</span>
      </h2>

      <div className="cta-panel">
        <h3>Schon wieder ist am Monatsende das Konto leer?</h3>
        <p>
          Kennst du das? Kleine Ausgaben hier und da und plötzlich ist alles weg. Wir zeigen dir,
          wie du dein Geld besser im Blick behältst und trotzdem Spaß am Leben hast.
        </p>

        {/* Neues Formular */}
        <form action={handleSignup} style={{ marginTop: "1rem" }}>
          <div style={{ display: "grid", gap: ".6rem" }}>
            <input
              type="text"
              name="name"
              placeholder="Dein Name"
              aria-label="Name"
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="dein@email.de"
              aria-label="E-Mail"
              required
              className="input"
            />
            <button type="submit" className="btn btn-primary">
              Eintragen
            </button>
          </div>
        </form>

        {/* alter CTA bleibt erhalten */}
        <a className="btn btn-primary" href="#services" style={{ marginTop: ".75rem" }}>
          Jetzt starten
        </a>
      </div>
    </section>
  );
}
