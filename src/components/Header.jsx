import React, { useContext } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { ThemeContext } from "../theme-context";
function Header({ changeTheme }) {
  let theme = useContext(ThemeContext);
  return (
    <header style={{ backgroundColor: theme.background }}>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <label className="switch">
        <input type="checkbox" defaultChecked onClick={changeTheme} />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default Header;
