export default function AboutPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Neurafate</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          We are a team dedicated to leveraging artificial intelligence to create impactful solutions and share valuable
          knowledge.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground mt-2">
              To empower individuals and businesses with cutting-edge AI technologies.
            </p>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-muted-foreground mt-2">To be a leading voice in AI innovation and education.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
