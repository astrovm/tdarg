import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

export default function PreciosLoading() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Header />

      <PageHero
        title="Precios de medicamentos"
        description="Precios actualizados de Farmacity para medicamentos de TDAH"
      >
        <div className="mb-6 flex justify-center">
          <Skeleton className="h-8 w-64 rounded-full" />
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
      </PageHero>

      <div className="bg-slate-100 dark:bg-slate-950">
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="agrupado" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-card border">
              <TabsTrigger value="agrupado">Por tipo</TabsTrigger>
              <TabsTrigger value="lista">Lista Completa</TabsTrigger>
            </TabsList>

            <TabsContent value="agrupado" className="space-y-8 mt-6">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="h-1 w-8 rounded" />
                  <Skeleton className="h-8 w-72" />
                  <Skeleton className="h-6 w-40 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full mb-6" />
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="mb-8">
                    <Skeleton className="h-7 w-56 mb-4" />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <Card key={j} className="bg-card border shadow-sm">
                          <CardHeader className="pb-3">
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <div className="flex gap-2">
                              <Skeleton className="h-5 w-16 rounded-full" />
                              <Skeleton className="h-5 w-14 rounded-full" />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Skeleton className="h-4 w-full mb-1" />
                            <Skeleton className="h-4 w-2/3 mb-3" />
                            <Skeleton className="h-8 w-1/3" />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="h-1 w-8 rounded" />
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-6 w-40 rounded-full" />
                </div>
                <div className="mb-8">
                  <Skeleton className="h-7 w-48 mb-4" />
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 2 }).map((_, j) => (
                      <Card key={j} className="bg-card border shadow-sm">
                        <CardHeader className="pb-3">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <div className="flex gap-2">
                            <Skeleton className="h-5 w-16 rounded-full" />
                            <Skeleton className="h-5 w-14 rounded-full" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-2/3 mb-3" />
                          <Skeleton className="h-8 w-1/3" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
