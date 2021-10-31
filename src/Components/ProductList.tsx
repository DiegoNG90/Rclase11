import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iProduct } from "../interfaces/product";

export interface IProductProps {
  product: iProduct;
}

const ProductList: React.FC<IProductProps> = ({ product }) => {
  return (
    <Col md={12}>
      <Row>
        <Col md={6} style={{ width: "280px" }}>
          <img
            style={{ width: "200px" }}
            src={product.thumbnail}
            alt={product.title}
          />
        </Col>
        <Col md={6}>
          <Link to={`/product/${product.id}`}>
            <h5>{product.title}</h5>
          </Link>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductList;
