import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export default function Cardlist({ item }) {
  const [arr, setArr] = React.useState([]);
  const [item1, setItem1] = React.useState(1);
  const [item2, setItem2] = React.useState(1);
  const [item3, setItem3] = React.useState(1);
  const [item4, setItem4] = React.useState(1);

  const increment1 = () => {
    setItem1((prev) => prev + 1);
  };
  const increment2 = () => {
    setItem2((prev) => prev + 1);
  };
  const increment3 = () => {
    setItem3((prev) => prev + 1);
  };
  const increment4 = () => {
    setItem4((prev) => prev + 1);
  };
  const decrement1 = () => {
    setItem1((prev) => prev - 1);
  };
  const decrement2 = () => {
    setItem2((prev) => prev - 1);
  };
  const decrement3 = () => {
    setItem3((prev) => prev - 1);
  };
  const decrement4 = () => {
    setItem4((prev) => prev - 1);
  };

  const data = [
    {
      id: 1,
      name: "food card",
      description: "This card is used for spending on Food merchants",
      final_price: 21,
      original_price: 30,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",
      amount: 1,
    },
    {
      id: 2,
      name: "travel card",
      description:
        "This card is used for spending on Travel and hotel bookings",
      final_price: 20,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",
      amount: 1,
    },
    {
      id: 3,
      name: "epic card",
      description: "Use this card and get benefits on every transaction",
      final_price: 40,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",
      amount: 1,
    },
    {
      id: 4,
      name: "happay premium card",
      description: "Use this card and get benefits on every transaction",
      final_price: 40,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",
      amount: 1,
    },
  ];
  return (
    <div>
      <Container>
        <h2
          style={{
            textAlign: "center",
            color: "#6e6f71",

            borderBottom: "3px solid  #6e6f71",
          }}
        >
          Most Popular
        </h2>
        <div className="row">
          {/* <div style={{ display: "flex" }}> */}
          {data.map((ele, index) => (
            <div className="col-md-4  my-3" key={ele.id}>
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img variant="top" src={ele.img_url} />
                <Card.Body>
                  <Card.Title
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {ele.name}
                    <div>
                      <span
                        style={{
                          fontSize: "15px",
                          textDecoration: "line-through",
                        }}
                      >
                        {ele.original_price
                          ? `$ ${ele.original_price}.00`
                          : null}
                      </span>{" "}
                      <span>$ {ele.final_price}.00</span>
                    </div>
                  </Card.Title>
                  <Card.Text>{ele.description}</Card.Text>
                </Card.Body>

                {arr[index] === ele.id ? (
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid #0d6efd",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button>
                      <AddIcon
                        onClick={
                          ele.id === 1
                            ? increment1
                            : ele.id === 2
                            ? increment2
                            : ele.id === 3
                            ? increment3
                            : increment4
                        }
                      />
                    </Button>
                    <h3 style={{ textAlign: "center" }}>
                      {ele.id === 1
                        ? item1
                        : ele.id === 2
                        ? item2
                        : ele.id === 3
                        ? item3
                        : item4}
                    </h3>

                    <Button>
                      <RemoveIcon
                        onClick={
                          ele.id === 1
                            ? decrement1
                            : ele.id === 2
                            ? decrement2
                            : ele.id === 3
                            ? decrement3
                            : decrement4
                        }
                      />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setArr(arr.concat(ele.id));
                      item.setItemList([...item.itemList, data[index]]);
                      item.setItemCount(item.itemCount + 1);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
