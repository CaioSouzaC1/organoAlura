import "./ListaSuspensa.css";
const ListaSuspensa = (props) => {
  return (
    <div className="listaSuspensa">
      <label>{props.label}</label>
      <select
        value={props.oqueveio}
        onChange={(event) => props.funcDeSetar(event.target.value)}
      >
        <option value="" key={""}></option>
        {props.items.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaSuspensa;
