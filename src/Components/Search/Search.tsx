import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";

const Search: React.FC = () => {
  const [item, setItem] = useState<string>("");

  const handleSearch = (e: any): void => {
    if (e.keyCode === 13) {
      // Propagar mi producto al contexto
      setItem("");
    }
  };
  return (
    <Row className="justify-content-center mb-4 mt-4">
      <Col md={6}>
        <Form.Control
          style={{
            height: "2rem",
            width: "55%",
            fontSize: "1.2rem",
            margin: "1rem 0rem",
          }}
          type="text"
          size="lg"
          value={item}
          onKeyDown={handleSearch}
          onChange={(e) => setItem(e.target.value.trim())}
          placeholder="Search product"
          data-testid="search"
        ></Form.Control>
      </Col>
    </Row>
  );
};

export default Search;
