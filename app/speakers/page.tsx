import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Speakers',
  description: 'Find the best Speakers in one place',
  keywords: ['Speakers', 'music']
}

export default function Speakers(){
  return(
    <div className="text-7xl text-black p-4 text-center">Speakers</div>
  )
}