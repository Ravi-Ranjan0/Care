import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"

import Features from "@/components/sections/home3/Features"
import Team from "@/components/sections/home3/Team"

import News from "@/components/sections/home3/News"
import Process from "@/components/sections/home3/Process"
import Testimonial from "@/components/sections/home3/Testmonial"
import Faq from "@/components/sections/home3/Faq"
import Video from "@/components/sections/home3/Video"
import Gallery from "@/components/sections/home3/Gallery"
import Contact from "@/components/sections/home3/Contact"
import Map from "@/components/sections/home3/Map"
import Subscribe from "@/components/sections/home3/Subscribe"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Process />
                <Testimonial />
                <Faq />
                <Video />
                <Team />
                <Gallery />
                <News />
                <Contact />
                <Map />
                <Subscribe />
               
            </Layout>
        </>
    )
}