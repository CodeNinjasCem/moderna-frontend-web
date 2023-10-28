import Image from 'next/image'
import { Metadata } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="container h-[850px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;No podemos conformarnos con lo bueno, tenemos que dar ese esfuerzo adicional, para alcanzar la excelencia en todo lo que hagamos: desde los procesos industriales, los productos que fabricamos, el servicio que brindamos a nuestros clientes, los registros contables, las responsabilidades con nuestro país y el cuidado del medio ambiente.&rdquo;
              </p>
              <footer className="text-sm">La Moderna</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-6xl font-semibold tracking-tight mb-16">
                La Moderna
              </h1>
              <p className="text-sm text-muted-foreground">
                Vida saludable con La Moderna. ¡Pasta es salud!
              </p>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              <Button className='mt-8' asChild>
                <Link href="/graphs">Ver estadisticas</Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
