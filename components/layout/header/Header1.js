'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
      <div className="auto-container">
        <div className="top-inner">
          <ul className="info-list clearfix">
            <li>
              <i className="icon-1"></i>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00
            </li>
            <li>
              <i className="icon-2"></i>Email: <Link href="tel:01989526503">0198-9526503</Link>
            </li>
            <li>
              <img src="assets/images/icons/icon-1.png" alt="" /> 47 Bakery Street, London, UK
            </li>
          </ul>
          <ul className="social-links clearfix">
            <li>
              <Link href="/">
                <i className="icon-4"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="icon-5"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="icon-6"></i>
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className="icon-7"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
                   
                {/* Header Upper */}
                <div className="header-lower">
      <div className="outer-container">
        <div className="auto-container">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
              </figure>
            </div>
            <div className="menu-area">
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                     <Menu/>
                </div>
              </nav>
            </div>
            <div className="btn-box">
              <Link href="/" className="theme-btn btn-one"><span>Request A Pickup</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
              
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                        </div>
                       
                            <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu/>
                                </div>
                            </nav>
                            <ul className="menu-right-content">
                          
                            <div className="btn-box">
                            <Link href="/" className="theme-btn btn-one"><span>Request A Pickup</span></Link>
                        </div>
                            </ul>
                        
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
