import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalQuantity = useSelector((state) =>
    state.cart.reduce((acc, { quantity }) => acc + quantity, 0)
  );

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
        <Link to="/">All Products</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
