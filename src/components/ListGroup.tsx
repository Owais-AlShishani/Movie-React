function ListGroup() {
  let items = ["Grozny", "New York", "Paris", "Amman"];
  items = [];
  return (
    <>
      <h1>List</h1>
      {items.length > 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
