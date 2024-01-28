import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import News from "@/components/sections/home1/News"
import Testimonial from "@/components/sections/home1/Testimonial"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Subscribe from "@/components/sections/home1/Subscribe"
import Team from "@/components/sections/home1/Team"
import Video from "@/components/sections/home1/Video"
import Process from "@/components/sections/home1/Process"
import Pricing from "@/components/sections/home1/Pricing"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Services />
                <WhyChooseUs />
                <Funfacts />
                <Team />
                <Video />
                <Process />
                <Testimonial />
                <Pricing />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}