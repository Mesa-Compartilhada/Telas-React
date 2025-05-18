import { Info } from "@phosphor-icons/react";
import * as Tooltip from '@radix-ui/react-tooltip';

export default function InputField({ name, label, id, type, msg, step, pattern, defaultValue, change, hint, disabled, inputFull, tooltipMessage }) {
  return (
    <div className={`flex flex-col relative gap-1 ${inputFull ? "w-full" : ""}`}>
      <input className={`input-default peer ${msg && "input-error"}`} name={[name]} type={type} id={id} placeholder="" pattern={pattern ?? ""} step={step} defaultValue={defaultValue} onChange={(e) => change(e)} disabled={disabled} />
      <label className="label-default" htmlFor={id}>{label}</label>
      {
        tooltipMessage
        &&
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span className="absolute right-2 top-1/3 -translate-y-1/2 cursor-help text-gray-500 hover:text-gray-700">
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
      <small className="text-xs ml-2 text-gray-600">{hint}</small>
      <p className="h-3 text-xs ml-2 mr-auto text-red-500">{msg ?? ""}</p>
    </div>
  );
}