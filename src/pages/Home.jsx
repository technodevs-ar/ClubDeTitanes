import { GridAcceso } from "../components/Home/GridAcceso"
import { Banner } from "../components/Home/Banner"
import { SectionEspacio } from "../components/Home/SectionEspacio"
import { Testimonial } from "../components/Home/Testimonials"
import { Footer } from "../components/Home/Footer"
import { AboutUs } from "../components/Home/AboutUs"

const Home = () => {
  return (
    <main>
      <Banner />
      <SectionEspacio />
      <GridAcceso />
      <Testimonial />
      <AboutUs />
      <Footer />
    </main>
  )
}

export default Home