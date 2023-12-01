import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
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
            <div className="container_Skills" >
                <h1 className="container_Skills_h1" >skills...</h1>
            </div>
            <Tabs >
                <TabList  >
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>Js</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoBD</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
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
                            borderRadius={'15px'}                            
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/D5rP8qF/html-5-html-5-logo-wallpaper-preview.jpg'
                            alt='Caffe Latte'
                        />
                    </Card>
                    </TabPanel>
                    <TabPanel>
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
                            borderRadius={'15px'}                            
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/WvGVv4w/css.png'
                            alt='Caffe Latte'
                        />
                    </Card>
                    </TabPanel>
                    <TabPanel>
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
                            borderRadius={'15px'}
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/r7xLWqB/javascript.jpg'
                            alt='Caffe Latte'
                        />
                    </Card>
                    </TabPanel>
                    <TabPanel>
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
                            borderRadius={'15px'}
                            h={'200'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/Jryy82Z/react.jpg'
                            alt='Caffe Latte'
                        />
                    </Card>
                    </TabPanel>
                    <TabPanel>
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
                            borderRadius={'15px'}
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/X35FFtz/mongo.png'
                            alt='Caffe Latte'
                        />
                    </Card>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
        </div>
    )
  }
  
  export default Inicio