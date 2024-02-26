import React ,{useState, useEffect} from 'react'
import { AppBar, Box,Tab, Tabs, Toolbar ,Typography} from '@mui/material';
import { TabContext, TabList,TabPanel} from '@mui/lab'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from '@emotion/react';

export default function Services() {

    const tabsData =[
    { tabCategory : "Get Hired",
      tabSubcategories:["Subcategory 1" ,"Subcategory 2","Subcategory 3"]
    },
    { tabCategory : "Opportunity",
      tabSubcategories:["Subcategory 1" ,"Subcategory 2","Subcategory 3"]
    },
    { tabCategory : "Events",
      tabSubcategories:["Subcategory 1" ,"Subcategory 2","Subcategory 3"]
    },
    { tabCategory : "Competitions",
      tabSubcategories:["Subcategory 1" ,"Subcategory 2","Subcategory 3"]
    },
    { tabCategory : "Career Resources",
      tabSubcategories:["Subcategory 1" ,"Subcategory 2","Subcategory 3"]
    },
    { tabCategory : "Blogs,News & Adivce",
      tabSubcategories:["Subcategory 1" ,"Subcategory 2","Subcategory 3"]
    },
    ]

    const theme = useTheme();
  const [value, setValue] = React.useState('');

  const [hoveredTab, setHoveredTab] = useState(-1);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  const handleMouseEnter = (newValue) => {
    console.log(tabsData[newValue].tabSubcategories);
    setHoveredTab(newValue);
  };

  const handleMouseLeave = () => {
    setHoveredTab(-1);
  };

  return (

    // <Box sx={{ width: '100%', marginTop:5, position:"relative"}}>
    //   <TabContext value={value} >
    //     <Box   sx={{  borderBottom: 1, borderColor: 'divider' }}>
    //       <TabList centered onChange={handleChange} aria-label="lab API tabs example">
    //       {
    //         tabsData.map((tab,index) => (
    //           <Tab
    //             textColor="inherit"
    //             indicatorColor="inherit"
    //             key={tab.tabCategory}
    //             label={tab.tabCategory}
    //             value = {tab.tabCategory}
    //           />
    //         ))
    //       }
           
    //       </TabList>
    //     </Box>
    //     <Box sx={{position:"absolute",Index:99,backgroundColor:"pink"}}>
    //     <TabPanel value="1">Item One</TabPanel>
    //     <TabPanel value="2">Item Two</TabPanel>
    //     <TabPanel value="3">Item Three</TabPanel>
    //     </Box>
    //   </TabContext>
    // </Box>


  <AppBar
    elevation={0}
    position="fixed"
    sx={{
      mt: "100px",
      display: { xs: "none", lg: "flex" },
      justifyContent: "start",
      alignItems: "center",
      boxShadow: "none",
      height: hoveredTab !== -1 ? "265px" : "65px",
      borderBottom: `0.1px solid ${theme.palette.background.divider}`,
      transition: "height 0.4s ease", // Adding transition
    }}
  >
    <Tabs
      value={hoveredTab !== -1 ? hoveredTab : selectedTab}
      onChange={(e, newValue) => handleTabChange(newValue)}
      textColor="inherit"
      aria-label="full width tabs example"
    >
      {tabsData.map((tab, index) => (
        <div
          style={{
            display: "grid",
            gap: 20,
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <Tab
            icon={<ArrowDropDownIcon />}
            key={index}
            iconPosition="end"
            label={tab.tabCategory}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            sx={{
              color:
                hoveredTab === index
                  ? theme.palette.primary.yellow
                  : "inherit",
              borderBottom:
                hoveredTab === index
                  ? `3px solid ${theme.palette.primary.yellow}`
                  : "",
            }}
          />

          {hoveredTab !== -1 && 
          (
            tabsData[hoveredTab].tabSubcategories.map((item,index) =>{
             return(
              <>
                <Typography >{item}</Typography>
              </>
             )
            })
          
          )}
        </div>
      ))}
    </Tabs>
  </AppBar>
  
  );
}