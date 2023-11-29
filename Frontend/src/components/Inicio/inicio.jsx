import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import './inicio.css'


function Inicio() {

    return (
        <div className="container_Inicio">

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                mt='35px'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://i.ibb.co/RSN9FZq/Whats-App-Image-2023-11-29-at-11-16-49.jpg'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Ismael Maizon</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    )
  }
  
  export default Inicio