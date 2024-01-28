import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Features from "@/components/sections/home2/Features"
import News from "@/components/sections/home2/News"
import Faq from "@/components/sections/home2/Faq"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testmonial"
import Video from "@/components/sections/home2/Video"
import Contact from "@/components/sections/home2/Contact"
import Subscribe from "@/components/sections/home2/Subscribe"
import Service from "@/components/sections/home2/Service"
import Chooseus from "@/components/sections/home2/Chooseus"
import Funfacts from "@/components/sections/home2/Funfacts"
import Cta from "@/components/sections/home2/Cta"
import Solution from "@/components/sections/home2/Solution"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Features />
                <About />
                <Service />
                <Chooseus />
                <Team />
                <Cta />
                <Funfacts />
                <Solution />
                <Faq />
                <Testimonial />
                <Video />
                <News />
                <Contact />
                <Subscribe />
               
            </Layout>
        </>
    )
} 