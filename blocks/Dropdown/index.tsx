import React, { useState } from "react";
import { elements } from "..";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import * as styles from "./Dropdown.styles";

type TDropdown = BlokItem & {
  label?: string;
  body?: Blok;
  color?: string;
};

const Dropdown = ({ label, body, color }: TDropdown) => {
  const bodyContent = useDynamicComponent(body, elements);
  const [open, setOpen] = useState(false);
  return (
    <styles.DropdownContainer color={color}>
      <styles.DropDownHeader onClick={() => setOpen(!open)} color={color}>
        <styles.DropDownLabel>{label}</styles.DropDownLabel>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {!open && (
            <line
              x1="12.5"
              y1="2.18557e-08"
              x2="12.5"
              y2="24"
              stroke="#E0CC81"
            />
          )}
          <line
            x1="24"
            y1="12.5"
            x2="-4.37114e-08"
            y2="12.5"
            stroke="#E0CC81"
          />
        </svg>
      </styles.DropDownHeader>
      <styles.DropDownChild open={open}>{bodyContent}</styles.DropDownChild>
    </styles.DropdownContainer>
  );
};

export default Dropdown;
