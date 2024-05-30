import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  FormControl,
  Input,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
} from "@chakra-ui/react";
import { StarIcon, WarningIcon } from "@chakra-ui/icons";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const CommentSection = () => {
  const [messages, setMessages] = useState([]);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRatingClick = (star) => {
    setRating(star);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (rating < 1) {
      alert("最低需要一顆星");
      return;
    }

    const newMessage = {
      message,
      rating,
      time: new Date(),
      likeCount: 0,
      crackCount: 0,
    };

    setMessages([...messages, newMessage]);
    setMessage("");
    setRating(0);
  };

  const handleLikeClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likeCount += 1;
    setMessages(updatedMessages);
  };

  const handleDislikeClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].crackCount += 1;
    setMessages(updatedMessages);
  };

  const handleReportClick = () => {
    onOpen();
  };

  const renderRatingStars = (currentRating) => {
    return Array(5)
      .fill("")
      .map((_, i) => (
        <StarIcon
          key={i}
          color={i < currentRating ? "yellow.400" : "gray.300"}
          boxSize={6}
          mx={1}
        />
      ));
  };

  // 假電影數據
  const movieData = {
    title: "電影名稱",
    description:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介。",
    posterUrl: "https://via.placeholder.com/500x750",
  };

  return (
    <Box bg="#121212" p={4} minHeight="100vh" borderRadius="md">
      {/* 位元符 */}
      <Box height="80px" />

      {/* 電影海報&簡介 */}
      <Flex mb={6} align="top">
        <Image
          src={movieData.posterUrl}
          alt={`海报图：${movieData.title}`}
          boxSize="150px"
          objectFit="cover"
          borderRadius="md"
          mr={4}
        />
        <Box>
          <Heading color="white" mb={2}>
            {movieData.title}
          </Heading>
          <Text color="white">{movieData.description}</Text>
        </Box>
      </Flex>

      <Heading color="white" mb={4}>
        評論區
      </Heading>

      <Box mb={4}>
        <Flex
          direction="column"
          align="center"
          bg="#282828"
          p={4}
          borderRadius="md"
        >
          <Flex direction="row" justify="center" mb={3}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? "yellow.400" : "gray.300"}
                  cursor="pointer"
                  onClick={() => handleRatingClick(i + 1)}
                  boxSize={6}
                  mx={1}
                />
              ))}
          </Flex>
          <FormControl mt={2}>
            <Input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="請留言..."
              bg="#282828"
              color="white"
              variant="filled"
              borderColor="#FFFFF0"
              focusBorderColor="#FFFFF0"
              _hover={{ borderColor: "#FFFFF0" }}
            />
          </FormControl>
          <Button
            bg="#0A3D62"
            color="white"
            mt={2}
            _hover={{ bg: "#0A3D70" }}
            onClick={handleSubmit}
          >
            送出
          </Button>
        </Flex>
      </Box>

      {messages.map((msg, index) => (
        <Box key={index} bg="#282828" p={4} mb={4} borderRadius="md">
          <Flex justifyContent="space-between">
            <Box>
              <Text color="white" mb={1}>
                user: 咪咪
              </Text>
              <Flex>{renderRatingStars(msg.rating)}</Flex>
              <Text color="white" mt={2}>
                {msg.time.toLocaleDateString()} {msg.time.toLocaleTimeString()}
              </Text>
              <Text color="white" mt={2}>
                {msg.message}
              </Text>
            </Box>
            <Box>
              <Flex mt={2} justify="flex-end">
                <IconButton
                  icon={<FaThumbsUp />}
                  colorScheme="teal"
                  onClick={() => handleLikeClick(index)}
                  size="sm"
                  mr={2}
                />
                <Text color="white" mt={2}>
                  {msg.likeCount}
                </Text>
                <IconButton
                  icon={<FaThumbsDown />}
                  colorScheme="teal"
                  onClick={() => handleDislikeClick(index)}
                  size="sm"
                  ml={2}
                />
                <Text color="white" mt={2}>
                  {msg.crackCount}
                </Text>
              </Flex>
              <Button
                leftIcon={<WarningIcon />}
                colorScheme="red"
                onClick={handleReportClick}
                size="sm"
                mt={2}
              >
                檢舉
              </Button>
            </Box>
          </Flex>
        </Box>
      ))}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>檢舉成功</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>感謝您的檢舉，我們會盡快處理。</Text>
            <Button colorScheme="teal" onClick={onClose} mt={4}>
              關閉
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CommentSection;
