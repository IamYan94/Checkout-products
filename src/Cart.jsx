import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const totalQuantity = useSelector((state) =>
    state.cart.reduce((acc, { quantity }) => acc + quantity, 0)
  );
  const totalAmount = useSelector((state) =>
    state.cart.reduce((acc, { quantity, price }) => acc + price * quantity, 0)
  );

  const cartItems = useSelector((state) => state.cart);

  return (
    <MDBContainer className="py-5">
      <MDBRow className="my-4">
        <MDBCol md={8}>
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBCardTitle>Cart - {totalQuantity} items</MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard>
            <MDBCardHeader className="py-3">
              <MDBCardTitle>Summary</MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup className="list-group-flush">
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Total quantity
                  <span>{totalQuantity}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <b>Total amount</b>
                  <span>
                    <b>{totalAmount}</b>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
              <MDBBtn block size="lg" className="mt-3">
                Go to checkout
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Cart;
