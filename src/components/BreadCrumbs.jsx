"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ textColor="text-[#9C9C9C]", ChildTxtClr="text-[#696969]" }) {
    const pathname = usePathname(); // e.g. "/business-hub/procuretech-solution/source-to-contract"
    const segments = pathname.split("/").filter(Boolean); // ["business-hub", "procuretech-solution", "source-to-contract"]

    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className={`list-reset flex flex-wrap gap-2 ${textColor}`}>
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/"); // Build link up to this segment
                    const isLast = index === segments.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            {!isLast ? (
                                <Link href={href} className="hover:underline capitalize">
                                    {segment.replace(/-/g, " ")}
                                </Link>
                            ) : (
                                <span className={`${ChildTxtClr} capitalize`}>
                                    {segment.replace(/-/g, " ")}
                                </span>
                            )}
                            {!isLast && <span>/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
