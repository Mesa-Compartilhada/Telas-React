export default function Modal({ children, setIsActive }) {
  return (
    <div className="fixed flex inset-0 bg-black bg-opacity-80 items-center justify-center" onClick={() => setIsActive(false)}>
      <div className="flex flex-col text-base bg-neutral-200 rounded-lg p-2 sm:w-[26rem] w-2/3"  onClick={ (e) => e.stopPropagation() } >
        {
          children
        }
      </div>
    </div>
  )
}