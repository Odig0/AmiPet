import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Todo para tu mascota en un solo lugar
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Lleva el control del carnet de vacunación, reporta
          mascotas perdidas, encuentra servicios
          veterinarios, hoteles para perros, petshops y
          mucho más.
        </Typography>

        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button className="bg-primary hover:bg-green-700 text-white" size="tiny" variant="ghost">
            {`Empezar ahora`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Amipet hero image"
          src="/inicio.jpg"
        />
      </div>

      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Soluciones rápidas para el cuidado de tus
            mascotas
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Carnet digital al instante"
              description="Consulta y actualiza el historial de vacunas y tratamientos desde cualquier lugar."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Red de servicios veterinarios"
              description="Encuentra clínicas, petshops y hoteles cercanos con opiniones reales y contacto directo."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Mascotas seguras"
              description="Publica alertas de mascotas perdidas y recibe ayuda de tu comunidad en tiempo real."
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Comienza en minutos, sin código personalizado
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Registra a tu mascota, sube su carnet, agenda
            citas y accede a todos los servicios desde tu
            celular.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Amipet setup image"
            src="/main.jpg"
          />
        </div>

        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            ¿Tienes preguntas o quieres colaborar?
          </Typography>
          <div>
            Agenda una demo o escríbenos directamente
          </div>
          <Link href="" target="_blank">
            <Button size="tiny" variant="ghost">
              {`Contáctanos`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
