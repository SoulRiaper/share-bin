import BinEditor from "./BinEditor";
import InlineTextControl from "./InlineTextControl";
import TagEditor from "./TagEditor";
import Form from "./common/Form";

const BinForm = () => {
  return (
    <div className="p-3 d-flex flex-column gap-3">
      <Form>
        <BinEditor name="bin_text" />
        <div className="row align-items-center">
          <h6 className="col-1 m-0">Name</h6>
          <div className="col-11">
            <InlineTextControl useValidate={true} name="name" />
          </div>
        </div>
        <div className="row align-items-center">
          <h6 className="col-1 m-0">Tags</h6>
          <div className="col-11">
            <TagEditor name="tags"/>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default BinForm;