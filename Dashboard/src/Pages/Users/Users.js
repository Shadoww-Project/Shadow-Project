import React from 'react'
import './Users.css'
import SideNav from '../../Components/SideNav/SideNav';
import TopNav from '../../Components/TopNav/TopNav';
import { useState } from 'react'
import TableRow from '../../Components/TableRow'
import AddModal from '../../Components/AddTable'
import EditModal from '../../Components/EditModel'
import DeleteModal from '../../Components/DeleteModel'

const Users = () => {


    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [checkerArray, setCheckerArray] = useState([]);
    const [search, setSearch] = useState('');

    function handleModal(setState, value) {
        setState(value)
    }

    const rowsText = ['NAME', "POSITION", "COUNTRY", "STATUS", "ACTIONS", "Acceptance"];

    const usersData = [
        { id: 1, name: "omar1", email: "omar@gamil.com", position: 'admin', country: 'jordan', status: 'active' },
        { id: 2, name: "omar2", email: "omar@gamil.com", position: 'admin', country: 'jordan', status: 'active' },
        { id: 3, name: "omar3", email: "omar@gamil.com", position: 'admin', country: 'jordan', status: 'active' },
    ];

    const filteredData = usersData?.filter((user) => {

        if (search && !user.name.toLowerCase().includes(search.toLowerCase())) {
            return false;
        }
        return true;
    });


    return (
        <>
            <div className='flex'>
                <div>
                    <SideNav />
                </div>
                <div className='flex-1 h-screen'>
                    <TopNav />
                    <TableRow
                        setCheckerArray={setCheckerArray}
                        checkerArray={checkerArray}
                        setIsEdit={setIsEdit}
                        setIsDelete={setIsDelete}
                        rows={rowsText}
                        data={filteredData}
                    />

                    <AddModal handleModal={handleModal} setIsAdd={setIsAdd} isAdd={isAdd} />

                    <EditModal handleModal={handleModal} setIsEdit={setIsEdit} isEdit={isEdit} />

                    <DeleteModal handleModal={handleModal} setIsDelete={setIsDelete} isDelete={isDelete} />


                </div>
            </div >

        </>
    )
}

export default Users