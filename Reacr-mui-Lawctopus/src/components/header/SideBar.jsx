import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@emotion/react';
// import Toolbar from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Close from '@mui/icons-material/Close';
import { ArrowDropUp} from "@mui/icons-material";
import { Collapse, IconButton, Toolbar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const sideBarData = [
  {
    title:"Get Heired",
    suCategories: [
      "jobs","Internships And Small Projects"
    ]
  },
  {
    title:"Catrgory 1",
    suCategories: [
      "jobs","Internships And Small Projects"
    ]
  },
  {
    title:"Catrgory 2",
    suCategories: [
      "jobs","Internships And Small Projects"
    ]
  },
  {
    title:"Catrgory 3",
    suCategories: [
      "jobs","Internships And Small Projects"
    ]
  },

]

const drawerWidth = 350;
export default function SideBar({children ,mode}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }


    setState({ ...state, [anchor]: open });
  };

    const theme = useTheme();

  const [openCategories, setOpenCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  const handleCategoryClick = (index) => {
    setOpenCategories((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((item) => item !== index)
        : [index]
    );
  };

  const handleCategoryHover = (index) => {
    setHoveredCategory(index);
  };

  const handleSubcategoryHover = (index) => {
    setHoveredSubcategory(index);
  };

  const isCategoryOpen = (index) => {
    return openCategories.includes(index);
  };

  const isCategorySelected = (index) => {
    return isCategoryOpen(index) || hoveredCategory === index;
  };

  const isSubcategorySelected = (index) => {
    return hoveredSubcategory === index;
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          width:drawerWidth,
          paddingY: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={
            mode === "dark"
              ? "https://www.lawctopus.com/wp-content/uploads/2022/01/law-wh-tg.png"
              : "https://www.lawctopus.com/wp-content/uploads/2022/01/Lawctopus-logo-footer.svg"
          }
          alt=""
          height={"100%"}
          width={"100%"}
          style={{ maxWidth: 120, height: "auto", display: "block" }}
        />
        <IconButton onClick={toggleDrawer("left", false)}>
          <Close />
        </IconButton>
      </Toolbar>
      <Divider />
      <List sx={{ padding: "15px" }}>
        {[
          {
            text: "Get Hired",
            subcategories: ["Jobs", "Internships and Small Projects"],
          },
          {
            text: "Category 2",
            subcategories: ["Subcat 3", "Subcat 4"],
          },
          {
            text: "Category 3",
            subcategories: ["Subcat 5", "Subcat 6"],
          },
          {
            text: "Category 4",
            subcategories: ["Subcat 7", "Subcat 8"],
          },
        ].map((category, index) => (
          <React.Fragment key={index}>
            <div style={{ display: "flex" }}>
              <ListItem
                onClick={() => handleCategoryClick(index)}
                onMouseEnter={() => handleCategoryHover(index)}
                onMouseLeave={() => handleCategoryHover(null)}
                sx={{
                  color: isCategorySelected(index)
                    ? theme.palette.primary.yellow
                    : theme.palette.primary.navtext,
                }}
              >
                <span>{category.text}</span>
                {isCategoryOpen(index) ? (
                  <ArrowDropUp />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </ListItem>
            </div>
            <Collapse in={isCategoryOpen(index)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category.subcategories.map((subcategory, subIndex) => (
                  <ListItem
                    key={subIndex}
                    onMouseEnter={() => handleSubcategoryHover(subIndex)}
                    onMouseLeave={() => handleSubcategoryHover(null)}
                    sx={{
                      gap: 0,
                      paddingLeft: "20px",
                      color: isSubcategorySelected(subIndex)
                        ? theme.palette.primary.yellow
                        : theme.palette.primary.navtext,
                      "&:hover": {
                        color: theme.palette.primary.yellow,
                      },
                    }}
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText primary={subcategory} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      
        <React.Fragment >
          <Button  sx={{ display: { sm: 'inline-block', md: 'none' }   }} color='inherit' onClick={toggleDrawer("left", true)}>{children}</Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {drawer}
          </SwipeableDrawer>
        </React.Fragment>
     
    </div>
  );
}
