export default function ContactPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Have questions or want to collaborate? Reach out to us!
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-muted-foreground mt-2">info@neurafate.com</p>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-muted-foreground mt-2">+1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </section>
  )
}
