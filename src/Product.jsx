import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { addItem } from "./store/cart";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <MDBCard>
      <MDBCardImage src={product.image} position="top" />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>{product.price}</MDBCardText>
        <MDBBtn onClick={() => dispatch(addItem(product))}>Add to cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Product;
