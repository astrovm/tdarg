import { GitBranch, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card py-5 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
        <p>&copy; {currentYear} Tdarg. Información con fines educativos.</p>

        <div className="flex flex-wrap items-center gap-x-5">
          <a
            href="mailto:tdarg@4st.li"
            className="inline-flex min-h-10 items-center gap-2 rounded-md transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            tdarg@4st.li
          </a>
          <a
            href="https://github.com/astrovm/tdarg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-md transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
