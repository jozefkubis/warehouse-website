'use client';

import { useState } from "react";
import { createOrder } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

export default function OrderForm({ maxPcsToOrder, product, }) {
  const [NoOfPcs, setNoOfPcs] = useState(1);
  const { id, regularPrice, discount } = product;


  const selection = Array.from({ length: maxPcsToOrder }, (_, i) => i + 1).map((x) => (
    <option value={x} key={x}>
      {x} {x === 1 ? "item" : "items"}
    </option>
  ));

  const productPrice = (regularPrice - discount) * NoOfPcs;

  const orderData = { NoOfPcs, storeId: id };

  const createOrderWithData = createOrder.bind(null, orderData);

  const handleSelectChange = (e) => {
    setNoOfPcs(Number(e.target.value));
  };

  return (
    <div>
      <form
        action={createOrderWithData}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="NoOfPcs">How many items?</label>
          <select
            name="NoOfPcs"
            id="NoOfPcs"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            onChange={handleSelectChange}
            required
          >
            <option value="" key="">
              Select number of items...
            </option>
            {selection}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes">
            Anything we should know about your order?
          </label>
          <textarea
            name="notes"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-between items-center gap-6">
          <span className="text-3xl">€{productPrice}</span>
          <SubmitButton pendingLabel="Creating order...">
            Create order
          </SubmitButton>
        </div>
      </form>
    </div>
  )
}
