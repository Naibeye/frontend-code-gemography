import React from 'react'
import { Box,Heading, Stack, Image } from "@chakra-ui/react"


const numberDay = (date) => {
    const dateNow = Date.now()
    const dateCreated = new Date(date)
    const days = Math.trunc((dateNow - dateCreated) / (1000 * 3600 * 24))
    return days
}
const ReposCard = ({ item } ) => {
    return (
        <>
            <Box p={5} >
                <Stack direction="row">
                    <Box pl={5} w="100px">
                    <Image
                        w="100px"
                        objectFit="cover"
                        src={item.owner.avatar_url}
                        alt={item.name}
                    />
                    </Box>
                    <Box w="auto">
                    <Stack direction="column">
                        <Box>
                        <Heading as="h4" size="sm"> {item.name} </Heading>
                        </Box>
                        <Box>
                        {item.description}
                        </Box>
                        <Stack direction="row">  
                        <Box  shadow="md" px={5}>
                        Stars: {item.stargazers_count} 
                        </Box>
                        <Box shadow="md" px={5}>
                        Issues: {item.open_issues_count} 
                        </Box>
                        <Box>Submitted { numberDay(item.created_at)>1? `${numberDay(item.created_at)} days`: `one day`} ago by   {item.owner.login}
                        </Box>
                        </Stack>
                    </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default ReposCard
