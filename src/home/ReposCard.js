/**
 *  @author DJIMNAIBEYE Sidoine
 */
import React from 'react'
import { Box,Heading, Stack, Image } from "@chakra-ui/react"

/**
 * Detection the end of scroll
 * Returns the number of days between date now and param date.
 * @param {Date} date
 */
const numberDay = (date) => {
    const dateNow = Date.now()
    const dateCreated = new Date(date)
    const days = Math.trunc((dateNow - dateCreated) / (1000 * 3600 * 24))
    return days
}
/**
 * Composant render the repository details :
 *   Repository name
 *   Repository description
 *   Number of stars for the repo.
 *   Number of issues for the repo.
 *  Username and avatar of the owner.
 *  @param {repos} Object
 */
const ReposCard = ({ repos } ) => {
    return (
        <>
            <Box p={5} >
                <Stack direction="row">
                    <Box pl={5} w="100px">
                    <Image
                        w="100px"
                        objectFit="cover"
                        src={repos.owner.avatar_url}
                        alt={repos.name}
                    />
                    </Box>
                    <Box w="auto">
                    <Stack direction="column">
                        <Box>
                        <Heading as="h4" size="sm"> {repos.name} </Heading>
                        </Box>
                        <Box>
                        {repos.description}
                        </Box>
                        <Stack direction="row">  
                        <Box  shadow="md" px={5}>
                        Stars: {repos.stargazers_count} 
                        </Box>
                        <Box shadow="md" px={5}>
                        Issues: {repos.open_issues_count} 
                        </Box>
                        <Box>Submitted { numberDay(repos.created_at)>1? `${numberDay(repos.created_at)} days`: `one day`} ago by   {repos.owner.login}
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
