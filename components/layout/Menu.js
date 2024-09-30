import Link from "next/link";
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
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/service">Services</Link>
        </li>
        <li className="dropdown">
          <Link href="/">Team</Link>
          <ul>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/team-details">Team Details</Link>
            </li>
          </ul>
        </li>
        {/* Pages */}
        <li className="dropdown">
          <Link href="/">Pages</Link>
          <ul>
            <li>
              <Link href="/tesmonial">Tesmonial</Link>
            </li>
            <li>
              <Link href="/works">How it works</Link>
            </li>
            <li>
              <Link href="/chooseus">Why Choose Us</Link>
            </li>
            <li>
              <Link href="/pricing-table">Pricing-Table</Link>
            </li>
            <li>
              <Link href="/faq">Faq's</Link>
            </li>
            <li>
              <Link href="/appointment">Make Appointment</Link>
            </li>
            <li>
              <Link href="/error-page">Page Not Found</Link>
            </li>

            {/* ... (similarly for other page items) */}
          </ul>
        </li>
        {/* Contact */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
