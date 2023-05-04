import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between px-16 py-10 sticky top-0 font-elden tracking-widest bg-black w-full mx-auto text-amber-50 text-sm md:text-xl z-50">
            <div className="flex flex-1 items-center">
                <Link href={'/'}>ELDEN RING</Link>
            </div>
            <div className="flex-1 items-end md:flex">
                <nav className="flex-1">
                    <ul className="flex justify-end flex-1">
                        <Link href={'Armor'} className="px-4 cursor-pointer hover:text-amber-500">ARMOR</Link>
                        <Link href={'Weapon'} className="px-4 cursor-pointer hover:text-amber-500">WEAPON</Link>
                        <Link href={'Boss'} className="px-4 cursor-pointer hover:text-amber-500">BOSSES</Link>
                    </ul>
                        
                </nav>
            </div>
        </header>
    )
}

export default Header;