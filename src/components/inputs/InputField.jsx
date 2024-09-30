export default function InputField({ name, label, id, type, msg, step, pattern, defaultValue, change, hint, disabled }){
  return(
    <div className="flex flex-col relative gap-1">
      <input className={ `input-default peer ${ msg && "input-error" }` } name={ [name] } type={ type } id={ id } placeholder="" pattern={ pattern ?? "" } step={ step } defaultValue={defaultValue} onChange={(e) => change(e)} disabled={disabled} />
      <label className="label-default" htmlFor={ id }>{ label }</label>
      <small className="text-xs ml-2 text-gray-600">{hint}</small>
      <p className="h-3 text-xs ml-2 mr-auto text-red-500">{ msg ?? "" }</p>
    </div>
  );
}