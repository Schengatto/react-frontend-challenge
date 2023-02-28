import React, { FunctionComponent, useState } from "react";

interface Item {
   label: string;
   value: string | number;
}

interface SelectProps {
   items: Item[];
}

const Select: FunctionComponent<SelectProps> = ({ items }) => {
   const [selected, setSelected] = useState("");

   const handleOnChange = (event: any) => setSelected(event.target.value);

   return (
      <select onChange={handleOnChange}>
         {items.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
      </select>
   );
}

export default Select;