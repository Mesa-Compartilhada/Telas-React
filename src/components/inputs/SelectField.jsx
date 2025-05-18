import { Info } from '@phosphor-icons/react';
import * as Tooltip from '@radix-ui/react-tooltip'

export default function SelectField({ name, label, id, options, msg, defaultValue, change, disabled, tooltipMessage }){
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
      {
        tooltipMessage
        &&
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span className="absolute right-5 top-1/3 -translate-y-1/2 cursor-help text-gray-500 hover:text-gray-700">
                <Info size={20} />
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="bg-gray-400 text-white p-2 rounded-lg text-xs shadow-lg">
                { tooltipMessage }
                <Tooltip.Arrow className="fill-gray-400" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      }
      <p className="h-3 text-xs ml-2 mt-1 mr-auto text-red-500">{ msg ?? "" }</p>
    </div>
  );
}