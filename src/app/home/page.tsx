// Nextjs
import { Metadata } from "next"

// Components
import { HomePage } from "@/components/HomePage"


export const metadata: Metadata = {
  title: '',
  description: ''
}

function Page() {
  return (
    <HomePage />
  )
}

export default Page