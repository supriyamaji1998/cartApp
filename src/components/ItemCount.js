import React from "react";
import { Button } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export default function ItemCount() {
  const [item, setItem] = React.useState(1);
  const increment = () => {
    setItem((prev) => prev + 1);
  };
  const decrement = () => {
    setItem((prev) => prev - 1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          border: "2px solid #0d6efd",
          justifyContent: "space-between",
        }}
      >
        <Button>
          <AddIcon onClick={increment} />
        </Button>
        <h3 style={{ textAlign: "center" }}>{item}</h3>

        <Button>
          <RemoveIcon onClick={decrement} />
        </Button>
      </div>
    </>
  );
}
