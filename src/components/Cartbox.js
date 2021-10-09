import React from "react";
import { Container, Table } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CartBoxItem from "./CartBoxItem";
import { Link } from "react-router-dom";
export default function Cartbox({ itemList }) {
  return (
    <div>
      <Container>
        {/* <Link to="/"> */}
        <p>
          <ArrowBackIcon /> Back To Home
        </p>
        {/* </Link> */}
        <h5>Old Summary({itemList.itemCount})</h5>
        <Table striped bordered hover style={{ width: "50vw" }}>
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Items</th>
              <th>QTY</th>
            </tr>
          </thead>
          <tbody>
            {itemList.itemList.map((data) => {
              return <CartBoxItem ItemData={data} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
