import { Card,CardBody, SkeletonText } from '@chakra-ui/react'



const GameCardSkeleton = () => {
  return (
    <Card>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton