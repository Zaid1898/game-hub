import { IconType } from 'react-icons'
import { FaWindows ,FaLinux ,FaPlaystation ,FaXbox , FaAndroid , FaApple} from 'react-icons/fa'
import {MdPhoneIphone } from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import {SiNintendo} from 'react-icons/si'
import { Platform } from "../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"

interface Props{
    platforms : Platform[]
}
const PlatformIconList = ({platforms} : Props) => {
    const iconMap: {[key : string] : IconType} = {
        pc : FaWindows,
        linux : FaLinux,
        playstation : FaPlaystation,
        xbox : FaXbox,
        android : FaAndroid,
        mac : FaApple,
        nintendo : SiNintendo,
        ios : MdPhoneIphone,
        web : BsGlobe
    }
  return (
    <HStack marginY={1}>
    {platforms.map((platform) => 
       <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
    
    )}
    </HStack>
  )
}

export default PlatformIconList