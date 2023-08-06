import React, { useState } from "react";
import Header from "../components/Table/Header";
import TableRow from "../components/Table/TableRow";
import AddModal from "../components/Table/AddModal";
import EditModal from "../components/Table/EditModal";
import DeleteModal from "../components/Table/DeleteModal";

export default function Users() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [checkerArray, setCheckerArray] = useState([]);
  const [search, setSearch] = useState("");

  function handleModal(setState, value) {
    setState(value);
  }

  const rowsText = [
    "NAME",
    "POSITION",
    "COUNTRY",
    "STATUS",
    "ACTIONS",
    "Acceptance",
  ];

  const usersData = [
    {
      id: 1,
      name: "omar1",
      email: "omar@gamil.com",
      position: "أدمن",
      country: "الأردن",
      status: "نشط",
    },
    {
      id: 2,
      name: "omar2",
      email: "omar@gamil.com",
      position: "أدمن",
      country: "الأردن",
      status: "نشط",
    },
    {
      id: 3,
      name: "omar3",
      email: "omar@gamil.com",
      position: "أدمن",
      country: "الأردن",
      status: "نشط",
    },
  ];

  const filteredData = usersData?.filter((user) => {
    if (search && !user.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Header
        setSearch={setSearch}
        handleModal={handleModal}
        setIsAdd={setIsAdd}
      />

      <TableRow
        setCheckerArray={setCheckerArray}
        checkerArray={checkerArray}
        setIsEdit={setIsEdit}
        setIsDelete={setIsDelete}
        rows={rowsText}
        data={filteredData}
      />

      <AddModal handleModal={handleModal} setIsAdd={setIsAdd} isAdd={isAdd} />

      <EditModal
        handleModal={handleModal}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
      />

      <DeleteModal
        handleModal={handleModal}
        setIsDelete={setIsDelete}
        isDelete={isDelete}
      />
    </>
  );
}
