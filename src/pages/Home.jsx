import { GridAcceso } from "../components/Home/GridAcceso"
import { Banner } from "../components/Home/Banner"
import { SectionEspacio } from "../components/Home/SectionEspacio"
import { Testimonial } from "../components/Home/Testimonials"

const Home = () => {
  return (
    <main>
      <Banner />
      <SectionEspacio />
      <GridAcceso/>
      <Testimonial />
    </main>
  )
}

export default Home