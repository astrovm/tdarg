import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

export default function PreciosLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
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

      <div className="bg-gray-200 dark:bg-gray-700 border-y border-gray-300 dark:border-gray-600">
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="agrupado" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white dark:bg-gray-800 border-2 dark:border-gray-600">
              <TabsTrigger value="agrupado">Por Aprobación</TabsTrigger>
              <TabsTrigger value="lista">Lista Completa</TabsTrigger>
            </TabsList>

            <TabsContent value="agrupado" className="space-y-8 mt-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
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
                        <Card key={j} className="border-l-4 border-l-green-500 bg-white dark:bg-gray-800 border-2 dark:border-gray-600">
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

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="h-1 w-8 rounded" />
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-6 w-40 rounded-full" />
                </div>
                <div className="mb-8">
                  <Skeleton className="h-7 w-48 mb-4" />
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 2 }).map((_, j) => (
                      <Card key={j} className="border-l-4 border-l-blue-500 bg-white dark:bg-gray-800 border-2 dark:border-gray-600">
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
