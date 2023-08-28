// Nextjs
import { Metadata } from "next"

// Components
import { HomePage } from "@/components/HomePage"


export const metadata: Metadata = {
  title: 'Desafio plin - tempo agora',
  description: ''
}

function Page() {
  return (
    <HomePage />
  )
}

export default Page