import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={90} height={90} />
            </div>
            <Link href="/"><a>Accueil</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ibans"><a>Ibans List</a></Link>
        </nav>
    );
}
 
export default Navbar;