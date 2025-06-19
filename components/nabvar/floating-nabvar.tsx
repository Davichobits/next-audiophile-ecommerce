import { ActiveLink } from "./active-link"
import { INavItems } from "@/app/types/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  navItems: INavItems[];
  setIsOpen: (value: boolean) => void;
}

export const FloatingNabvar = ({navItems, setIsOpen}: Props) => {
  return (
    <div className="fixed inset-0 z-40 bg-black/50" onClick={()=>setIsOpen(false)}>
      <div className="absolute top-13 left-0 right-0 bg-black p-4 lg:hidden">
        <button onClick={()=>setIsOpen(false)} className="absolute right-4 cursor-pointer hover:text-Orange">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className="flex flex-col gap-4">
          {navItems.map(item => (
            <li key={item.path}>
              <ActiveLink {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
