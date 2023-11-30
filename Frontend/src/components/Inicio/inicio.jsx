import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import './inicio.css'


function Inicio() {

    return (
        <div className="container_Inicio">

            <Card
                borderColor='#242424'
                backgroundColor='#242424'
                w='80%'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={"auto"}
                mt='35px'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://i.ibb.co/RSN9FZq/Whats-App-Image-2023-11-29-at-11-16-49.jpg'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody color={"white"} >
                        <Heading size='md'>Ismael Maizon</Heading>

                        <Text py='2'>
                            Estudiante de Ing. en Sitemas
                        </Text>
                        <Text py='2'>
                            Actualmente me encuentro trabajando como desarrollador freelance de paginas web

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