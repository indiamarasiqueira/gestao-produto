import React from "react";

import { Box, InputText, ButtonSearch } from "./style";
import SearchIcon from "@material-ui/icons/Search";

const BoxSearch = (props) => {
  return (
    <Box onSubmit={props.handleSubmit}>
      <InputText
        type="number"
        placeholder="Pesquisa por número"
        value={props.value}
        onChange={props.handleChange}
      />
      <ButtonSearch type="submit">
        <SearchIcon />
        <span className="search-text">Buscar Pedido</span>
      </ButtonSearch>
    </Box>
  );
};
export default BoxSearch;
