import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'


function NavBar() {

    return (
        <Grid w='100%' templateColumns='repeat(3, 1fr)' gap={2}>
            <GridItem display='flex' w='100%' h='100%' bg='blue.500'  >hola</GridItem>
            <GridItem display='flex' w='100%' h='100%' bg='blue.500'  >hola</GridItem>
            <GridItem display='flex' w='100%' h='100%' bg='blue.500'  >hola</GridItem>
        </Grid>
    )
  }
  
  export default NavBar