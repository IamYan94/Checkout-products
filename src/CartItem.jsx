import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { addItem, deleteItem, removeItem } from "./store/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <MDBRow>
      <MDBCol lg={3} md={12} className="mb-4 mb-lg-0">
        <MDBCardImage src={product.image} width="100%" />
      </MDBCol>
      <MDBCol lg={5} md={6} className="mb-4 mb-lg-0">
        <p>
          <b>{product.title}</b>
        </p>
        <MDBBtn onClick={() => dispatch(deleteItem(product))}>
          <MDBIcon icon="trash" />
        </MDBBtn>
      </MDBCol>
      <MDBCol lg={4} md={6} className="mb-4 mb-lg-0">
        <div className="d-flex mb-4">
          <MDBBtn
            className="px-3 me-2"
            onClick={() => dispatch(removeItem(product))}
          >
            <MDBIcon icon="minus" />
          </MDBBtn>
          <MDBInput
            label="Quantity"
            type="number"
            value={product.quantity}
            className="pe-none"
          />
          <MDBBtn
            className="px-3 ms-2"
            onClick={() => dispatch(addItem(product))}
          >
            <MDBIcon icon="plus" />
          </MDBBtn>
        </div>
        <p className="text-start text-md-center">
          <b>{product.price}</b>
        </p>
      </MDBCol>
      <hr className="my-4" />
    </MDBRow>
  );
};

export default CartItem;
