import { GridAcceso } from "../components/Home/GridAcceso"
import { Banner } from "../components/Home/Banner"
import { SectionEspacio } from "../components/Home/SectionEspacio"

const Home = () => {
  return (
    <main>
      <Banner />
      <SectionEspacio />
      <GridAcceso/>
    </main>
  )
}

export default Home