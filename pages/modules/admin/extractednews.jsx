import React, { useState } from 'react';
import TableCrud from '../../../lib/front/tablecrud';
import { Column } from 'primereact/column';
import { useRouter } from 'next/router'
import axios from 'axios';
import MenuPrincipal from '../../../components/menuprincipal';


export default function ExtractedNews(props) {

    const router = useRouter()
    
    const [showForm, setshowForm] = useState({ visible: false })


    function addButtonClicked(e) {
       
    }

    function editButtonClicked(e) {


    }


    async function deleteButtonClicked(e, search) {

       
    }

    // Filtros
    const filters = [
        { label: 'Título', value: 'titulo', types: ['contain', 'equal'] },
    ];


    return (
        <div>
            <MenuPrincipal></MenuPrincipal>
            <div className="p-grid p-formgrid p-m-lg-3 p-m-2">
                <div className="p-col-12 p-mb-12 p-lg-12 p-mb-lg-0">

                    <TableCrud
                        {...props}
                        title="Crawled News"
                        filters={filters}
                        // onAddButtonClicked={addButtonClicked}
                        // onEditButtonClicked={editButtonClicked}
                        // onDeleteButtonClicked={deleteButtonClicked}
                        url='/api/admin/crawlingnews'>

                        <Column selectionMode="multiple" style={{ width: '3em' }} />
                        <Column field="titulo" header="Título" sortable={true} />
                        {/* <Column header="Ações" body={actionBodyTemplate}></Column> */}
                    </TableCrud>

                </div>
            </div>
        </div>

    );

}

