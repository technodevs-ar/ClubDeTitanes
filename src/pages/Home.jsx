import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main>
      Hola esto es la vista Home
      <Link to="/about">About</Link>
    </main>
  )
}

export default Home