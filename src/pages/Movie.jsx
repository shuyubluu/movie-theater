import React from "react";
import {
  Box,
  VStack,
  HStack,
  Button,
  Image,
  Text,
  Link,
  Divider,
  Icon,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { FaYoutube, FaStar } from "react-icons/fa";

const Detail = () => {
  const bg = useColorModeValue("#121212", "#121212");
  const cardBg = useColorModeValue("#1c1c1c", "#1c1c1c");
  const primaryColor = useColorModeValue("#e2b714", "#e2b714");
  const secondaryColor = useColorModeValue("#00a896", "#00a896");

  return (
    <Box
      bg={bg}
      color="white"
      minHeight="100vh"
      pt="4rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      px="4"
    >
      <Box
        bg={cardBg}
        color="white"
        width={{ base: "100%", md: "80%" }}
        maxWidth="1200px"
        p="6"
        borderRadius="lg"
        boxShadow="lg"
        flex="1"
      >
        <Button
          position="fixed"
          top="4"
          right="4"
          colorScheme="teal"
          href="#"
          boxShadow="lg"
        >
          立即訂票
        </Button>

        <Box position="relative">
          <Image
            borderRadius="lg"
            src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/442503396_753616850259959_8464212311549019199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2hgZ99zpt8IQ7kNvgHscYSj&_nc_ht=scontent-tpe1-1.xx&oh=00_AYBiBG_0aprYdNdqiY4lfvkPz8SAoKUrOTd57KPmBYSHSw&oe=665B6910"
            alt="movie poster"
            w="full"
            objectFit="cover"
          />
          <Link
            href="https://www.youtube.com/watch?v=DHUpvwyb49o"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            _hover={{ transform: "translate(-50%, -50%) scale(1.1)" }}
            transition="all 0.3s ease"
          >
            <Icon as={FaYoutube} w="70px" h="70px" color="red.500" />
          </Link>
          <Text
            position="absolute"
            bottom="6"
            left="6"
            fontSize="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, #7928CA, #FF0080)"
            bgClip="text"
          >
            猩球崛起：王國誕生
          </Text>
        </Box>

        <Divider my="6" borderColor={primaryColor} />

        <VStack align="start" spacing="4">
          <HStack spacing="4" flexWrap="wrap">
            <Badge
              colorScheme="yellow"
              fontSize="md"
              px="2"
              py="1"
              borderRadius="md"
            >
              保護級
            </Badge>
            <HStack
              p="2"
              bg={secondaryColor}
              borderRadius="md"
              boxShadow="md"
              alignItems="center" // 确保文本和图标垂直中心对齐
            >
              <Text fontSize="md" color="black">
                評分 4.8
              </Text>
              <Icon as={FaStar} color="yellow.400" w="20px" h="20px" />
            </HStack>
            <Badge
              colorScheme="green"
              fontSize="md"
              px="2"
              py="1"
              borderRadius="md"
            >
              動作片
            </Badge>
            <Badge
              colorScheme="blue"
              fontSize="md"
              px="2"
              py="1"
              borderRadius="md"
            >
              105分鐘
            </Badge>
          </HStack>

          <Text mt="3" fontSize="lg" lineHeight="tall">
            故事背景發生在凱撒統治過後的幾世代。猩猩主導著世界，而人類則被迫在陰影中苟延殘喘的生活。
            隨著新的暴君領袖崛起，一隻年輕的猩猩踏上了一段質疑自己過去信念的旅程，牠也將做出影響猩猩和人類未來命運的選擇。
          </Text>

          <Text mt="3" fontSize="lg">
            導演: 魯伯特·瓦耶特
          </Text>
          <Text fontSize="lg">
            主演: 安迪·瑟金斯 / 詹姆斯·弗蘭科 / 芙蕾達·平托 / 約翰·利思戈 /
            布萊恩·考克斯
          </Text>
          <Text fontSize="lg">語言: 英文 / 中文</Text>
        </VStack>

        <VStack align="start" mt="8">
          <Text fontSize="2xl" fontWeight="bold">
            精彩劇照
          </Text>
          <HStack spacing="3">
            <Image
              borderRadius="lg"
              src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/442480177_753616823593295_696982489645474954_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DWf5n8raabkQ7kNvgEJByG_&_nc_ht=scontent-tpe1-1.xx&oh=00_AYApgM7h_AkfybuytixPS4vlTDA7hjuY3In_YAXMAwl-mA&oe=665C603D"
              alt="movie still"
              w="30%"
            />
            <Image
              borderRadius="lg"
              src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/441368737_753616836926627_5584532731715980162_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AzfuGvuekPoQ7kNvgE8RasJ&_nc_ht=scontent-tpe1-1.xx&oh=00_AYAVIihdv1Ff5qMv27yD8agw2I92ddbWkhDiA0AjnpX_1g&oe=665C4B08"
              alt="movie still"
              w="30%"
            />
            <Image
              borderRadius="lg"
              src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/441337106_753616880259956_9076752130288745255_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iWU25q5jfqcQ7kNvgF50h4j&_nc_ht=scontent-tpe1-1.xx&oh=00_AYDQyNZwLCxKCDfnRBQqUZ8DRs1RhXX12zvvd2FYkeKfyw&oe=665C4FCC"
              alt="movie still"
              w="30%"
            />
          </HStack>
        </VStack>

        <VStack align="start" mt="8">
          <Text fontSize="2xl" fontWeight="bold">
            主要演員
          </Text>
          <HStack spacing="3">
            <Image
              borderRadius="lg"
              src="https://image1.gamme.com.tw/news2/2014/63/57/p6CVpaaYl6aX.jpg"
              alt="actor"
              w="30%"
            />
            <Image
              borderRadius="lg"
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2024%2F04%2F29%2Fkingdom-of-the-planet-of-the-apes-feature-01-1.jpg?cbr=1&q=90"
              alt="actor"
              w="30%"
            />
            <Image
              borderRadius="lg"
              src="https://puui.qpic.cn/vpic_cover/h0552bre0ml/h0552bre0ml_hz.jpg/496?max_age=7776000"
              alt="actor"
              w="30%"
            />
          </HStack>
        </VStack>

        <VStack align="start" mt="8">
          <HStack w="full" justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">
              精彩評論
            </Text>
            <Link fontSize="lg" color="teal.300" href="/reviews">
              查看更多
            </Link>
          </HStack>
          <Divider borderColor={primaryColor} />
          <VStack align="start" spacing="4" mt="4">
            <Box bg="gray.700" p="4" borderRadius="md" w="full" boxShadow="md">
              <Text fontSize="md" fontWeight="bold">
                觀眾甲:
              </Text>
              <Text mt="2" fontSize="md">
                影片情節緊湊，令人不禁感嘆猩猩的顯赫智力和領袖風範。
              </Text>
            </Box>
            <Box bg="gray.700" p="4" borderRadius="md" w="full" boxShadow="md">
              <Text fontSize="md" fontWeight="bold">
                觀眾乙:
              </Text>
              <Text mt="2" fontSize="md">
                從開始到結束都非常引人入勝，猩猩和人類之間的衝突展現得淋漓盡致。
              </Text>
            </Box>
            <Box bg="gray.700" p="4" borderRadius="md" w="full" boxShadow="md">
              <Text fontSize="md" fontWeight="bold">
                影評人丙:
              </Text>
              <Text mt="2" fontSize="md">
                這部電影成功地將情感和動作交織在一起，不愧是年度大片。
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
      <Box minHeight="50px" />
    </Box>
  );
};

export default Detail;
