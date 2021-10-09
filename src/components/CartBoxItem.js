import React from "react";
import ItemCount from "./ItemCount";
export default function CartBoxItem({ ItemData }) {
  return (
    <tr>
      <td>{ItemData.id}</td>
      <td>{ItemData.name}</td>
      <td>
        <ItemCount ItemData={ItemData} />
      </td>
    </tr>
  );
}
