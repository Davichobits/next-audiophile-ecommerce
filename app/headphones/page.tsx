import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Headphones',
  description: 'Find the best headphones in one place',
  keywords: ['headphones', 'music']
}

export default function Headphones(){
  return(
    <div className="text-7xl text-black p-4 text-center">Headphones</div>
  )
}