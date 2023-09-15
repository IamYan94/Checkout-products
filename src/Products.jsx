import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Product from "./Product";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <MDBContainer className="mt-2">
      <MDBRow>
        {products.map((product, index) => (
          <MDBCol size="md" key={index}>
            <Product product={product} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Products;
