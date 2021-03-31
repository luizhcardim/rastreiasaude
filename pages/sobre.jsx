import MenuPrincipal from '../components/menuprincipal';
import { Panel } from 'primereact/panel';
export default function SobrePage() {

    





    return (
        <div>
            <MenuPrincipal />
            <div className="p-grid p-m-lg-5 p-m-2">

            <div className="p-col">
                            <Panel header="Sobre">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </div>

            </div>
            
       
        </div>);


}