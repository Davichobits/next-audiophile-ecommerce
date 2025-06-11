import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Earphones',
  description: 'Find the best Earphones in one place',
  keywords: ['Earphones', 'music']
}

export default function Earphones(){
  return(
    <div className="text-7xl text-black p-4 text-center">Earphones</div>
  )
}