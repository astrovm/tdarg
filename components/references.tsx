import { ExternalLink, FileText } from "lucide-react"

export interface Reference {
  id: number
  title: string
  authors?: string
  url: string
  description?: string
  year?: string
}

interface ReferencesProps {
  references: Reference[]
}

export function References({ references }: ReferencesProps) {
  return (
    <section className="mt-10 border-t pt-6">
      <details className="group rounded-lg border bg-card">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4">
          <span className="flex items-center gap-2 font-semibold">
            <FileText className="h-4 w-4" />
            Fuentes
          </span>
          <span className="text-sm text-muted-foreground">
            {references.length} documento{references.length !== 1 ? "s" : ""}
          </span>
        </summary>
        <ol className="space-y-3 border-t p-4 text-sm">
          {references.map((ref) => (
            <li key={ref.id} id={`ref-${ref.id}`} className="flex gap-3">
              <span className="min-w-[2rem] font-semibold text-muted-foreground">
                [{ref.id}]
              </span>
              <div className="flex-1">
                <div>
                  {ref.authors && (
                    <span className="font-medium text-foreground">
                      {ref.authors}.{" "}
                    </span>
                  )}
                  <span className="font-semibold text-foreground">
                    {ref.title}
                  </span>
                  {ref.year && (
                    <span className="text-muted-foreground">
                      {" "}
                      ({ref.year})
                    </span>
                  )}
                </div>
                {ref.description && (
                  <p className="mt-1 text-muted-foreground">
                    {ref.description}
                  </p>
                )}
                {ref.url !== "#" && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Ver documento
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </details>
    </section>
  )
}
