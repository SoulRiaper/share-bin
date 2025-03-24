import BinForm from "./BinForm"
import BinRouter from "./BinRouter"
import NotFoundPage from "./common/NotFoundPage"

function BinMain () {
  return (
    <div className="main-container">
      <BinRouter defaultComponent={(<NotFoundPage />)}>
        <BinForm pattern="/"></BinForm>
      </BinRouter>
    </div>
  )
}

export default BinMain