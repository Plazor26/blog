export default function ProjectsPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Showcasing our innovative work and solutions.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-xl font-semibold">Project Alpha</h3>
            <p className="text-muted-foreground mt-2">An AI-powered data analysis tool.</p>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-xl font-semibold">Project Beta</h3>
            <p className="text-muted-foreground mt-2">A real-time language translation service.</p>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-xl font-semibold">Project Gamma</h3>
            <p className="text-muted-foreground mt-2">Automated content generation platform.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
