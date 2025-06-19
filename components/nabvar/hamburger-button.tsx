import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const HamburgerButton = ({isOpen, setIsOpen}: Props) => {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
      <Image
        className="lg:hidden"
        src="/assets/shared/tablet/icon-hamburger.svg"
        alt="Menu"
        width={24}
        height={24}
      />
    </button>
  )
}
