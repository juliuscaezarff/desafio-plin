// Nextjs
import { Metadata } from "next"

// Components
import { FormPage } from "@/components/FormPage"


export const metadata: Metadata = {
  title: 'Desafio plin - buscador de cep',
  description: ''
}

function Page() {
  return (
    <FormPage />
  )
}

export default Page