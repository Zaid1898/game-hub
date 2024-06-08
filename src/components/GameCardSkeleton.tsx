import { Card,CardBody,Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width="250px" borderRadius='10px' overflow={"hidden"}>
        <Skeleton  height = "200px" padding='50px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton