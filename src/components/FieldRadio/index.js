import React from "react";

import { BoxLabel } from './style'

const FieldRadio = ({ label, name }) => (
  <BoxLabel>
    <input type="radio" name={name} />
    <span>{label}</span>
  </BoxLabel>
);

export default FieldRadio;
