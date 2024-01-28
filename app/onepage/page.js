import Layout from "@/components/layout/Layout"
import About from "@/components/sections/onepage/About"
import Banner from "@/components/sections/onepage/Banner"

import Funfacts from "@/components/sections/onepage/Funfacts"
import News from "@/components/sections/onepage/News"

import Service from "@/components/sections/onepage/Services"
import Testimonial from "@/components/sections/onepage/Testimonial"
import WhyChooseUs from "@/components/sections/onepage/WhyChooseUs"

import Feature from "@/components/sections/onepage/Features"
import Team from "@/components/sections/onepage/Team"
import Video from "@/components/sections/onepage/Video"
import Process from "@/components/sections/onepage/Process"
import Pricing from "@/components/sections/onepage/Pricing"
import Subscribe from "@/components/sections/onepage/Subscribe"


export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Service />
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