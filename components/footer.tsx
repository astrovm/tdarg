import { GitBranch, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card py-5 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
        <p>&copy; {currentYear} Tdarg. Información con fines educativos.</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:tdarg@4st.li"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            tdarg@4st.li
          </a>
          <a
            href="https://github.com/astrovm/tdarg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
