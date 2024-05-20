import Link from "next/link"

export default function Navbar () {
    return (
        <div className="flex justify-center gap-20 my-20">
            <Link className="border-2 border-gray-400 px-4 py-2 rounded-xl" href="/">Home</Link>
            <Link className="border-2 border-gray-400 px-4 py-2 rounded-xl" href="/server-page">Server Page</Link>
            <Link className="border-2 border-gray-400 px-4 py-2 rounded-xl" href="/client-page">Client Page</Link>
        </div>
    )
 }