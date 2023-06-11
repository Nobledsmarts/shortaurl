'use client'
import DottedLine from '@/components/DottedLine'
import Nav from '@/components/Nav'
import { Box, Flex, HStack, Heading, Text, Image as ChackraImage, Button} from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <HStack position={'relative'} justifyContent={'space-between'} color={'aliceblue'} bg={'#13889f'} minHeight={450}>
        <Flex px={'5rem'} flexDirection={'column'} gap={'1.5rem'} flexBasis={'60%'} h={'450'} justifyContent={'flex-start'} alignItems={'left'} bg={''}>
          <Heading 
            px={'0'} 
            bgClip={'text'} 
            color={'white'} 
            as={'h1'} 
            fontSize={'5xl'} 
            mt={'100px'} 
            fontFamily={'rubik'} 
            fontWeight={'700'} 
            bgGradient={'linear-gradient(to right, #121FCF 0%, #CF1512 100%)'}
            >
              The Shorter, The Better!
            </Heading>
          <Text 
            fontSize={'xl'} 
            fontFamily={'raleway'} 
            width={'lg'}
          > 
            ShortLink is a custom short link personalization tool that enables you to target, engage and helps you drive more customers.
          </Text>

          <Box>
            <Button  py={'1.3rem'} px={'3rem'} color={'#000'} bg={'aliceblue'} borderRadius={'2rem'}> Get started </Button>
          </Box>
        </Flex>
        <Flex>
          <Image width={450} height={450} src={'/img2.png'} alt='' />
        </Flex>
        <Box 
          borderRadius={'50%'} 
          position={'absolute'} 
          left={'-40px'} 
          zIndex={1} 
          top={'100px'} 
          width={'100'} 
          overflow={'hidden'} 
          border={'0px'} 
          py={'0px'} 
          height={'100px'}
        >
          
          <Image style={{zoom : 1}} color='#e50000'  src={'/26432.svg'} alt='' width={'100'} height={'100'}/>
        </Box>
        <Box  position={'absolute'} left={'0px'} zIndex={-1} bottom={'-50px'} border={'0px'} width={'100%'}  py={'0px'} height={'100px'}>
        
          <ChackraImage objectFit={'cover'} style={{zoom : 1}} color='#e50000'  src={'/wave2.svg'} alt='' width={'100%'} height={'250px'}/>
        </Box>
      </HStack>
      <HStack mt={'5rem'} justifyContent={'center'}>
        <Flex justifyContent={'center'}>
          <Heading 
           px={'0'} 
           bgClip={'text'} 
           color={'cyan.900'} 
           as={'h1'} 
           fontSize={'4xl'}
           textAlign={'center'}
           mt={'10px'}
           w={'lg'}
           fontFamily={'montserrat'} 
           fontWeight={'700'} 
           bgGradien={'linear-gradient(to right, #121FCF 0%, #CF1512 100%)'}
          >
            What would you like to create? <span className="waving-hand">👋</span>
          </Heading>
        </Flex>
      </HStack>
    </main>
  )
}
