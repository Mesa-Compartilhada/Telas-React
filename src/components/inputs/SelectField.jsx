export default function SelectField({ name, label, id, options, msg, defaultValue, change, disabled }){
  return(
    <div className="flex flex-col gap-1 relative">
      <label className="label-default" htmlFor={name}>{label}</label>
      <select className={`input-default ${ msg && "input-error" }`} name={[name]} id={id} onChange={(e) => change(e)} defaultValue={defaultValue} disabled={disabled}>
        {
          Object.keys(options).map(
            key => <option key={key} value={key}>{options[key]}</option>
          )
        }
      </select>
      <p className="h-3 text-xs ml-2 mt-1 mr-auto text-red-500">{ msg ?? "" }</p>
    </div>
  );
}