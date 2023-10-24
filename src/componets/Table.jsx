// Den Style des Tabels definieren samt Headers

function Table({ id, name, amount, size, length, alternateID }) {
  return (
    <div>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Anzahl</th>
        <th>Speichergröße</th>
        <th>Länge</th>
        <th>Alternate ID</th>
      </tr>
      <tr>
        <td>{name}</td>
        <td>{id}</td>
        <td>{amount}</td>
        <td>{size}</td>
        <td>{length}</td>
        <td>{alternateID}</td>
      </tr>
    </div>
  );
}

export default Table;
