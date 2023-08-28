// Nextjs
import { Metadata } from "next"

// Components
import { FormPage } from "@/components/FormPage"


export const metadata: Metadata = {
  title: '',
  description: ''
}

function Page() {
  return (
    <FormPage />
  )
}

export default Page