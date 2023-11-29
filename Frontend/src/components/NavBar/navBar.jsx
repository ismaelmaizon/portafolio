import React from "react";
import { Grid, GridItem, Tab, TabList, Tabs } from '@chakra-ui/react'


function NavBar() {

    return (
        <Grid w='100%' h='70px' templateColumns='repeat(3, 1fr)' gap={2} >
            <GridItem display='flex' h='100%' bg='blue.500' >
            <div className="container_select">
                    <Tabs display={"flex"} w={'100%'} justifyItems={"center"}  variant='unstyled' >
                        <TabList display={"flex"} flexDirection={"row"} m={'15px'}>
                            <Tab _selected={{ color: 'white', bg: 'red' }}>Tab 1</Tab>
                            <Tab _selected={{ color: 'white', bg: 'red' }}>Tab 2</Tab>
                        </TabList>
                    </Tabs>
                </div>
            </GridItem>
            <GridItem display='flex' h='100%' bg='blue.500' >
            <div className="container_select">
                    <Tabs display={"flex"} w={'100%'} justifyItems={"center"}  variant='unstyled' >
                        <TabList display={"flex"} flexDirection={"row"} m={'15px'}>
                            <Tab _selected={{ color: 'white', bg: 'red' }}>Tab 1</Tab>
                            <Tab _selected={{ color: 'white', bg: 'red' }}>Tab 2</Tab>
                        </TabList>
                    </Tabs>
                </div>
            </GridItem>
            <GridItem display='flex' w='100%' h='100%' bg='blue.500' >
                <div className="container_select">
                    <Tabs display={"flex"} w={'100%'} justifyItems={"center"}  variant='unstyled' >
                        <TabList display={"flex"} flexDirection={"row"} m={'15px'}>
                            <Tab _selected={{ color: 'white', bg: 'red' }}>Tab 1</Tab>
                            <Tab _selected={{ color: 'white', bg: 'red' }}>Tab 2</Tab>
                        </TabList>
                    </Tabs>
                </div>
            </GridItem>
        </Grid>
    )
  }
  
  export default NavBar