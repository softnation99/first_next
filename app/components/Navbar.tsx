import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>homepage</Link>
            <Link href='/tickets'>tickets</Link>
        </nav>
    );
}
