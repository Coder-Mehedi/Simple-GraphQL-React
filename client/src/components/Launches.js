import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import LaunchItems from './LaunchItems'
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
    query Launch_Query{
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <Fragment>
            <MissionKey />
            {data.launches.map(launch => (
                <LaunchItems launch={launch} key={launch.mission_name}/>
            ))}
        </Fragment>
    )
}

export default Launches
