import Image from "next/image"
import Link from "next/link"
export default function Logo() {
  return (
    <Link href="/">
    <Image
      src="/logo.svg"
      alt="Denoisify Logo"
      className="h-25 w-32"
      width={150} 
      height={40}
      priority
      />
      </Link>
  )
}
