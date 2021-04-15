import MenuPrincipal from '../components/menuprincipal';
import { Panel } from 'primereact/panel';

export default function SobrePage(props) {


    return (
        <div>
            <MenuPrincipal />
            <div className="p-grid p-m-lg-5 p-m-2">

                <div className="p-col">
                    <Panel header="Sobre">
                        <p>Você pode entrar em contato com o desenvolvedor através do e-mail luizhcardim@gmail.com.</p>
                    </Panel>
                </div>

            </div>


        </div>);


}