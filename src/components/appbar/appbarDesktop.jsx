import { Search } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>

      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Product" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions />
    </AppbarContainer>
  );
}
