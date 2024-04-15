import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  TableContainer,
  HStack,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Checkout(props) {
  const [Inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log(Object.keys(Inputs).length);
    if (
      Object.keys(Inputs).length < !3 &&
      Inputs.alternate !== "" &&
      Inputs.name !== ""
    ) {
      alert("Bitte alle nötigen Informationen eintragen.");
      return;
    }
    axios.post("api/item", {
      name: Inputs.name,
      description: Inputs.desc,
      alternate_id: Inputs.alternate,
      size: Inputs.size,
      length: Inputs.length,
    });
    alert("Item erfolgreich erstellt!");
    window.location.reload(false);
  };

  const delItem = (id) => {
    axios
      .delete(`api/item/${id}`)
      .then((resposne) => {
        if (resposne.status === 200) {
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Checklength = (amount) => {
    if (amount > 0) {
      return true;
    }

    return false;
  };
  const CheckSize = (size) => {
    if (size > 0) {
      return true;
    }
    return false;
  };
  let items = useLocation();
  console.log(items);

  return (
    <div>
      <TableContainer>
        <Table className="w-full border-2 border-black border-solid">
          <Thead className="place-items-center ">
            <Tr>
              <Th className="border-2 border-black">Name</Th>
              <Th className="border-2 border-black">ID</Th>
              <Th className="border-2 border-black">Anzahl</Th>
              <Th className="border-2 border-black">Speichergröße</Th>
              <Th className="border-2 border-black">Länge</Th>
              <Th className="border-2 border-black">Alternate ID</Th>
              <Th className="border-2 border-black">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className="place-items-center">
              <Th className="border-2 border-black">{items.name}</Th>
              <Th className="border-2 border-black">{items.id}</Th>
              <Th className="border-2 border-black">
                {CheckSize && items.length}
              </Th>
              <Th className="border-2 border-black"></Th>
              <Th className="border-2 border-black">Länge</Th>
              <Th className="border-2 border-black">Alternate ID</Th>
              <Th className="border-2 border-black">Action</Th>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <div></div>
      <div className="">
        <HStack marginTop={"10px"} border="5px" borderColor={"green.400"}>
          <Input
            border="1px solid"
            borderRadius="10px"
            placeholder="Item Name"
            name="name"
            value={Inputs.name || ""}
            onChange={handleChange}
          />
          <Input
            border="1px solid"
            borderRadius="10px"
            placeholder="Item Beschreibung"
            name="desc"
            value={Inputs.desc || ""}
            onChange={handleChange}
          />
          <Input
            border="1px solid"
            borderRadius="10px"
            placeholder="Alternate ID"
            name="alternate"
            value={Inputs.alternate || ""}
            onChange={handleChange}
          />
          <Input
            border="1px solid"
            borderRadius="10px"
            placeholder="Länge"
            name="length"
            value={Inputs.length || ""}
            onChange={handleChange}
          />
          <Input
            border="1px solid"
            borderRadius="10px"
            placeholder="Größe"
            name="size"
            value={Inputs.size || ""}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Erstellen</Button>
        </HStack>
      </div>
    </div>
  );
}

export default Checkout;
