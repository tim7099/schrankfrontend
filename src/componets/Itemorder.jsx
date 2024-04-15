function Itemorder(
  id,
  name,
  amount,
  size,
  length,
  alternateID,
  image,
  addItem,
  reduceitems,
  count,
  currentuserid,
  giventoid
) {
  return (
    <div>
      <table>
        <tr>
          <td>{name}</td>
          <td>{size}</td>
          <td>{amount}</td>
        </tr>
      </table>
    </div>
  );
}

export default Itemorder;
