
import ContentSection from "./components/ContentSection"
import Header from "./components/Header"

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <ContentSection />
    </div>
  )
}

export default Home