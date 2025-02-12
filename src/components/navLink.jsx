"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({link}) => {

const pathName = usePathname();

    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-orange-200 text-black"}`} href={link.url}>
            {link.title}
        </Link>
    )
}

export default NavLink;