import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iProduct } from "../interfaces/products";
import { useParams } from 'react-router-dom'

export interface IProductProps{
    product: iProduct;
}
type ProductParam = {
  id: string;
};

const ProductList: React.FC<IProductProps> = ({product}) => {
  const {id} = useParams<ProductParam>()
  console.log("id", id)

    return (
    <Col md={12}>
      <Row>
        <Col md={6}>
          <img
            style={{ width: "200px" }}
            src={product.thumbnail}
            alt={product.title}
          />
        </Col>
        <Col md={6}>
          <Link to={`/product/${id}`} >
            <h5>{product.title}</h5>
          </Link>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductList;