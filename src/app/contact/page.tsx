// Nextjs
import { Metadata } from "next"

// Components
import { ContactPage } from "@/components/ContactPage"


export const metadata: Metadata = {
  title: '',
  description: ''
}

function Page() {
  return (
    <ContactPage />
  )
}

export default Page