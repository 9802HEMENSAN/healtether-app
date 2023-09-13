import React from "react";
import Navbar from "../navbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Input,
  Stack,
  Text,
  Radio,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const CustomiseForm = () => {
  const initialQuestions = [
    { id: 1, text: "Do you smoke? If yes, since (years)?", answerType: "text" },
    { id: 2, text: "What is your name?", answerType: "text" },
    {
      id: 3,
      text: "Do you consume alcohol? If yes, since (years)?",
      answerType: "text",
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [userAnswers, setUserAnswers] = useState({});
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    answerType: "text",
  });

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const handleAddQuestion = () => {
    const newQuestionId = questions.length + 1;
    setQuestions([...questions, { id: newQuestionId, ...newQuestion }]);
    setNewQuestion({ text: "", answerType: "text" }); // Reset new question input
  };

  const handleSubmit = () => {
    // Send userAnswers to the doctor (you would handle this part with a backend)
    console.log("User Answers:", userAnswers);
  };

  return (
    <div>
      <div   style={{ position : "sticky", top : "0" }} >
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <Box
          fontFamily={"Open Sans, sans-serif;"}
          p={5}
          width={"100%"}
          position={"relative"}
          ml={["1%", "18%"]}
        >
          {/* Top side */}
          <Flex
            m={[5, 10, 15]}
            align="left"
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={6}
          >
            <Heading fontSize={[12, 23, 35]}>Patient Questionnaire:</Heading>
          </Flex>

          <Flex   align={"start"} maxW="800px"  p="4">
            <Stack spacing="4">
              {questions.map((question) => (
                <Box key={question.id}>
                  <Text fontWeight="bold">{question.text}</Text>
                  {question.answerType === "text" && (
                    <Input
                      placeholder="Your answer here"
                      value={userAnswers[question.id] || ""}
                      onChange={(e) =>
                        handleAnswerChange(question.id, e.target.value)
                      }
                    />
                  )}
                  {question.answerType === "date" && (
                    <Input
                      type="date"
                      value={userAnswers[question.id] || ""}
                      onChange={(e) =>
                        handleAnswerChange(question.id, e.target.value)
                      }
                    />
                  )}
                  {question.answerType === "multipleChoice" && (
                    <Select
                      value={userAnswers[question.id] || ""}
                      onChange={(e) =>
                        handleAnswerChange(question.id, e.target.value)
                      }
                    >
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </Select>
                  )}
                  {question.answerType === "checkbox" && (
                    <Checkbox
                      isChecked={userAnswers[question.id]}
                      onChange={(e) =>
                        handleAnswerChange(question.id, e.target.checked)
                      }
                    >
                      Check this box
                    </Checkbox>
                  )}
                </Box>
              ))}
              <Box>
                <Text fontWeight="bold">Add New Question:</Text>
                <Input
                  placeholder="Question text"
                  value={newQuestion.text}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, text: e.target.value })
                  }
                />
                <Select
                  value={newQuestion.answerType}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      answerType: e.target.value,
                    })
                  }
                >
                  <option value="text">Text</option>
                  <option value="date">Date</option>
                  <option value="multipleChoice">Multiple Choice</option>
                  <option value="checkbox">Checkbox</option>
                </Select>
                <Button onClick={handleAddQuestion} colorScheme="blue" mt="2">
                  Add Question
                </Button>
              </Box>
              <Button onClick={handleSubmit} colorScheme="green">
                Submit
              </Button>
            </Stack>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default CustomiseForm;
