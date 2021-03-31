import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router'


export default function MenuPrincipal(){

    const router = useRouter()

    const items = [
        {
          label: 'Home',
          command: () => { router.push("/"); }
        },
        {
          label: 'Sobre',
          command: () => { router.push("/sobre"); }
        },
        {
          label: 'API',
          command: () => { router.push("/api"); }
        },
        {
          label: 'Contato',
          command: () => { router.push("/contato"); }
        }
      ];

      return <Menubar model={items} start={<div><b>Rastreia</b> Saúde</div>} />

}