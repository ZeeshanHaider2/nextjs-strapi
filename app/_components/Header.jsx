import Link from "next/link"
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <header>
        <h3>Header</h3>
        <Link href="/">HomePage</Link>
        <Link href="/blog">Blog</Link>
    </header>
  )
}

export default Header