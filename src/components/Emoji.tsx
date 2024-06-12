import meh from '../assets/meh.webp'
import thumbsup from '../assets/thumbsup.webp'
import bullseye from '../assets/bullseye.webp'
import { Image,ImageProps } from '@chakra-ui/react';

interface Props{
    rating : number;
}
const Emoji = ({rating} : Props) => {
    if(rating<3) return null;
    const emojiMap :{[key : number] : ImageProps} ={
        3 : {src : meh, alt : 'meh' },
        4 : {src : thumbsup, alt : 'recommended' },
        5 : {src : bullseye, alt : 'exceptional' },
    }
  return (
    <Image {...emojiMap[rating]} marginTop={1} boxSize = '30px'/>
  )
}

export default Emoji