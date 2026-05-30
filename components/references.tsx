import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"

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
    <section className="mt-12 pt-8 border-t">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="h-5 w-5" />
            Referencias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {references.map((ref) => (
              <li key={ref.id} id={`ref-${ref.id}`} className="flex gap-4">
                <span className="font-bold text-primary min-w-[2rem]">
                  [{ref.id}]
                </span>
                <div className="flex-1">
                  <div className="mb-2">
                    {ref.authors && (
                      <span className="text-foreground font-medium">
                        {ref.authors}.{" "}
                      </span>
                    )}
                    <span className="text-foreground font-semibold">
                      {ref.title}
                    </span>
                    {ref.year && (
                      <span className="text-muted-foreground">
                        {" "}({ref.year})
                      </span>
                    )}
                  </div>
                  {ref.description && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {ref.description}
                    </p>
                  )}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Ver documento
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>
  )
}
