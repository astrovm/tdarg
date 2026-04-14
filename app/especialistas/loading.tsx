import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";

export default function EspecialistasLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      <PageHero
        title="Especialistas en TDAH"
        description="Profesionales que diagnostican y tratan TDAH en cada provincia. Filtrá por ubicación y especialidad."
      >
        <Card className="bg-gradient-to-r from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/20 border-0 shadow-xl backdrop-blur-sm">
          <CardHeader className="pb-4">
            <Skeleton className="h-6 w-44" />
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-10 w-full rounded-lg" />
              <Skeleton className="h-10 w-full rounded-lg" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          </CardContent>
        </Card>
      </PageHero>

      <div className="bg-gray-200 dark:bg-gray-700 border-y border-gray-300 dark:border-gray-600">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Skeleton className="h-7 w-48" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-2 dark:border-gray-600"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Skeleton className="h-6 w-48 mb-2" />
                      <Skeleton className="h-5 w-32 mb-2" />
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-5 w-24 rounded-full" />
                        <Skeleton className="h-5 w-20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Skeleton className="h-4 w-4 mt-1" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-32 mb-1" />
                          <Skeleton className="h-4 w-40 mb-1" />
                          <Skeleton className="h-4 w-36" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-28" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-36" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <div>
                        <Skeleton className="h-4 w-20 mb-1" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                      <div>
                        <Skeleton className="h-4 w-24 mb-2" />
                        <div className="flex flex-wrap gap-1">
                          <Skeleton className="h-5 w-16 rounded-full" />
                          <Skeleton className="h-5 w-20 rounded-full" />
                          <Skeleton className="h-5 w-14 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Skeleton className="h-9 flex-1 rounded" />
                    <Skeleton className="h-9 w-20 rounded" />
                    <Skeleton className="h-9 w-12 rounded" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border-y border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700">
              <CardHeader>
                <Skeleton className="h-6 w-40" />
              </CardHeader>
              <CardContent className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Skeleton className="w-2 h-2 rounded-full mt-2" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 border-2 border-orange-200 dark:border-orange-700">
              <CardHeader>
                <Skeleton className="h-6 w-40" />
              </CardHeader>
              <CardContent className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Skeleton className="w-2 h-2 rounded-full mt-2" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-700">
              <CardHeader>
                <Skeleton className="h-6 w-40" />
              </CardHeader>
              <CardContent className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Skeleton className="w-2 h-2 rounded-full mt-2" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
