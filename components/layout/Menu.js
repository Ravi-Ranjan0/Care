import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page One</Link></li>
                        <li><Link href="/index-2">Home Page Two</Link></li>
                        <li><Link href="/index-3">Home Page Three</Link></li>
                        <li><Link href="/onepage">OnePage Home</Link></li>
                    </ul>
                </li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="dropdown"><Link href="/">Services</Link>
                    <ul>
                        <li><Link href="/service">Our Services</Link></li>
                        <li><Link href="/service-details">Cardiology</Link></li>
                        <li><Link href="/service-details-2">Dental Clinic</Link></li>
                        <li><Link href="/service-details-3">Neurosurgery</Link></li>
                        <li><Link href="/service-details-4">Medical</Link></li>
                        <li><Link href="/service-details-5">Pediatrics</Link></li>
                        <li><Link href="/service-details-6">Modern Laboratory</Link></li>
                        {/* ... (similarly for other service items) */}
                    </ul>
                </li>
                     <li className="dropdown"><Link href="/">Team</Link>
                            <ul>
                                <li><Link href="/team">Our Team</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                {/* Pages */}
                <li className="dropdown"><Link href="/">Pages</Link>
                    <ul>
                        <li className="dropdown"><Link href="/">Blog</Link>
                            <ul>
                                <li><Link href="/blog">Blog Grid</Link></li>
                                <li><Link href="/blog-2">Blog Sidebar</Link></li>
                                <li><Link href="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/tesmonial">Tesmonial</Link></li>
                        <li><Link href="/works">How it works</Link></li>
                        <li><Link href="/chooseus">Why Choose Us</Link></li>
                        <li><Link href="/pricing-table">Pricing-Table</Link></li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/appointment">Make Appointment</Link></li>
                        <li><Link href="/error-page">Page Not Found</Link></li>
                        

                        {/* ... (similarly for other page items) */}
                    </ul>
                </li>
                {/* Contact */}
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
