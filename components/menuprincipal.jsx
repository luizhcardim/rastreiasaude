import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client';
import { Button} from 'primereact/button'


export default function MenuPrincipal(){

    const router = useRouter()
    const [session] = useSession()



    let items = [
        {
          label: 'Home',
          command: () => { router.push("/"); }
        },
        {
          label: 'Sobre',
          command: () => { router.push("/sobre"); }
        },
        {
          label: 'Contato',
          command: () => { router.push("/contato"); }
        },
        session ? 
        {
          label: 'Administração',
          items:[
            {
              label: 'Notícias Extraídas',
              command: () => { router.push("/modules/admin/extractednews"); }
            },
          ]
        } : {}
      ];

      const right_toolbar = (
        <div>
          {!session ?
          <Button label='Login' onClick={() =>signIn()} className="p-button-warning"></Button>:
          <Button label='Logout' onClick={() => signOut()} className="p-button-warning"></Button>
          }
        </div>
      )

      return <Menubar model={session ? items : items} start={<div><b>Rastreia</b> Saúde</div>} end={right_toolbar} />

}