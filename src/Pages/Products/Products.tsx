import React from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import ProductList from "../../Components/ProductList";
import Loader from '../../Components/Loader'
import { useAxios } from "../../Hooks/useAxios";
import { iProduct } from "../../interfaces/products";

const ProductsView: React.FC = (): JSX.Element => {
  const [products, loading] : [any, boolean] = useAxios("search?q=zapatillas&limit=5");
  const { results }: { results: Array<iProduct> } = products;

  console.log(results);
  if (loading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Productos</title>
        <meta charSet="utf-8" />
      </Helmet>

      <Container>
        <Row className="justify-content-center">
          {results?.length > 0 ? (
            results.map((product: iProduct) => (
              <ProductList product={product} key={product.id} />
            ))
          ) : (
            <h3>No hay productos</h3>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProductsView;
