'use client'

import { Card, CardHeader, CardBody, Avatar, Button, CardFooter } from '@nextui-org/react'
import { useState } from 'react'
import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import PerfiLeft from './Perfil-left'
import Pagright from '../components/Pageright'

export default function PostCard ({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}) {
    const [isFollowed, setIsFollowed] = useState (false)
  return (
    <>
    <PerfiLeft/>
    <div className="relative hover:relative sm:top-[-580px] xl:top-[50px]">
    <form className='flex flex-row space-x-4 p-2 border-b border-white/20'>
      <img className='rounded-full w-10 h-10 object-contain' src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
        name='post'
        rows={4}
        className='w-full text-xl bg-black placeholder-gray-500 p-2'
        placeholder='¿Que esta pasando?'
        ></textarea>
        <button className='h-10 bg-sky-300 font-bold rounded-full px-5 py-2 self-end'>
          Postear
        </button>
      </div>
    </form>
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        HABÍA UNA VEZ una señora que se llamaba CRISTINA.
Era re mala, pero re mala y necesitaba ignorantes a  quienes manipular. Entonces un día construyó 19 universidades y casi 2 mil colegios. Tiempo después a CRISTINA se le ocurrió robarse todo, pero todo +
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    
    {/* segundo twitt */}

    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
         y para tener control del pueblo hizo hacer satélites. Pero como era recontra mala, decidió subsidiar servicios como la luz y el gas para que la industria se joda y crezca y para que todos y todas nos jodamos y paguemos menos y podamos usar aire acondicionado y esas cosas
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>

    {/* tercero twitt */}
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        que dañan a la humanidad.
Mientras más hacía, la maldad le aumentaba y fue ahí cuando decidió traer científicos para investigar vacunas y otras cosas que también dañan a los seres humanos. Ella era malísima, a tal punto que pagaba jubilaciones actualizadas y jodió a gran parte
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    {/* cuarto twitt */}
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        de los viejos/as, cuando de prepo, los metió en el sistema jubilatorio pese a no haber pagado aportes. Era tan, pero tan yegua que una vez mal humorada, les dijo a los docentes que tenían muchos meses de vacaciones, entonces se propuso joderlos y les dio paritarias libres por
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    {/* quinto twitt */}
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        arriba de la inflación para ver si los cagaba un poco más.
Como CRISTINA odiaba a los niños/as armó un plan diabólico que se llamó "CONECTAR IGUALDAD" y así llenaron los colegios de computadoras para arruinarles la infancia. A ella el daño no le alcanzó y les enchufó Paka Paka,
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    {/* sexto twitt */}
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        los mandó a inyectar a todos con muchas vacunas juntas y les mandó dinero con la Asignación Universal por hijo a fin de corromperlos y castigarlos con la escolaridad.
La yegua "dijo " que gays, lesbianas y trans eran un colectivo "indomable" y entonces para recontra joderlos
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    {/* septimo twitt */}
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        también dijo : "ahora les tiro por la cabeza con la ley de matrimonio igualitario, al igual que la de los heteros y se les acaba la boludez de la diversidad"... y así fue como creo la ley de matrimonio igualitario, de pura jodida que era .
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    {/* octavo twitt */}
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        Pero ella, que era peor que Néstor, un día decidió cagar a todos lo presidentes latinoamericanos entonces puso los salarios mínimos mas altos de toda la región con tal que Lula, Evo, Correa, etc se retorcieran de envidia.Hizo mas maldades. Plan Qunitas.
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    {/* noveno twitt */}
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
         Plan de viviendas Pro Cre Ar, plan Fines para terminar los estudios, y todo tipo de ayuda para empleos y estudios. A quien le gusta eso¨? ademas no pidió un solo peso prestado a la banca mundial y entonces estuvimos excluidos, con record de producción, exportación y        
        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>

      {/* decimo twitt */}
      <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Avatar isBordered radius="full" size="md" src="https://2f1a7f9478.visitscotland.net/wsimgs/9918359_1094529996.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>
        la mayor migración turística internacional que se tenga memoria. Asi los argentinos se iban a todos los lugares del mundo a sufrir, en fin, deben haber mas cosas, porque Nestor, no estaba en el cajón.
Si no entendiste es porque a Nisman lo mataron .....GRACIAS.        </p>
          #Liberen #A #Willy
          <span className="py-2" aria-label="computer" role="img">
            💻🐬
          </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4'/>
        </button>
        <button>
          <IconHeart className='w-4 h-4'/>
        </button>
        <button>
          <IconRepeat className='w-4 h-4'/>
        </button>
      </CardFooter>
    </Card>
    </div>
    <Pagright/>
    </>
  )
}