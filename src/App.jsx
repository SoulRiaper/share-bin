import BinMain from './BinMain'
import Footer from './common/Footer'
import Header from './common/Header'

function App() {
  return (
    <div className='d-flex flex-column h-100'>
      <Header></Header>
      <div className="container flex-shrink-0">
        <BinMain />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
