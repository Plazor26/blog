export default function Loading() {
  return (
    <main className="mx-auto max-w-3xl py-12">
      <div className="animate-pulse">
        <div className="h-8 bg-muted rounded w-32 mb-8"></div>
        <div className="space-y-6">
          <div className="p-4 rounded-lg">
            <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-muted rounded w-full mb-1"></div>
            <div className="h-4 bg-muted rounded w-2/3 mb-2"></div>
            <div className="h-3 bg-muted rounded w-24"></div>
          </div>
          <div className="p-4 rounded-lg">
            <div className="h-6 bg-muted rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-muted rounded w-full mb-1"></div>
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-24"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
