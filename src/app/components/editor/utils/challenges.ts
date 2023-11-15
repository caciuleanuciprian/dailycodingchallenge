"use client";

export const codingChallenges = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    description:
      "Write a function that takes two numbers as input and returns their sum.",
    examples: [
      { input: [2, 3], output: 5 },
      { input: [-1, 5], output: 4 },
    ],
  },
  {
    id: 2,
    title: "Reverse Integer",
    description: "Reverse digits of an integer.",
    examples: [
      { input: 123, output: 321 },
      { input: -123, output: -321 },
    ],
  },
  {
    id: 3,
    title: "Palindrome Number",
    description: "Determine whether an integer is a palindrome.",
    examples: [
      { input: 121, output: true },
      { input: -121, output: false },
    ],
  },
  {
    id: 4,
    title: "Roman to Integer",
    description: "Convert a Roman numeral to an integer.",
    examples: [
      { input: "III", output: 3 },
      { input: "IV", output: 4 },
    ],
  },
  {
    id: 5,
    title: "Longest Common Prefix",
    description:
      "Find the longest common prefix string amongst an array of strings.",
    examples: [
      { input: ["flower", "flow", "flight"], output: "fl" },
      { input: ["dog", "racecar", "car"], output: "" },
    ],
  },
  {
    id: 6,
    title: "Valid Parentheses",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: "()", output: true },
      { input: "()[]{}", output: true },
      { input: "(]", output: false },
    ],
  },

  {
    id: 8,
    title: "Remove Duplicates from Sorted Array",
    description:
      "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
    examples: [
      { input: [1, 1, 2], output: 2 },
      { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], output: 5 },
    ],
  },

  {
    id: 10,
    title: "Calculate Average",
    description:
      "Write a function that takes an array of numbers as input and returns the average.",
    examples: [
      { input: [4, 6, 8], output: 6 },
      { input: [1, 2, 3, 4, 5], output: 3 },
    ],
  },
  {
    id: 11,
    title: "Factorial",
    description:
      "Write a function that calculates the factorial of a given number.",
    examples: [
      { input: 5, output: 120 },
      { input: 3, output: 6 },
    ],
  },
  {
    id: 12,
    title: "Check Prime",
    description: "Write a function that determines if a given number is prime.",
    examples: [
      { input: 7, output: true },
      { input: 10, output: false },
    ],
  },
  {
    id: 13,
    title: "Reverse String",
    description:
      "Write a function that takes a string as input and returns its reverse.",
    examples: [
      { input: "hello", output: "olleh" },
      { input: "world", output: "dlrow" },
    ],
  },
  {
    id: 14,
    title: "Check Palindrome",
    description:
      "Write a function that checks if a given string is a palindrome.",
    examples: [
      { input: "radar", output: true },
      { input: "apple", output: false },
    ],
  },
  {
    id: 15,
    title: "Maximum Number",
    description:
      "Write a function that takes an array of numbers as input and returns the maximum value.",
    examples: [
      { input: [5, 2, 8, 1], output: 8 },
      { input: [-3, 0, -10, 5], output: 5 },
    ],
  },
  {
    id: 16,
    title: "Fibonacci Sequence",
    description:
      "Write a function that generates the Fibonacci sequence up to a given number.",
    examples: [
      { input: 8, output: [0, 1, 1, 2, 3, 5, 8, 13] },
      { input: 5, output: [0, 1, 1, 2, 3] },
    ],
  },
  {
    id: 17,
    title: "Count Vowels",
    description:
      "Write a function that counts the number of vowels in a given string.",
    examples: [
      { input: "programming", output: 3 },
      { input: "javascript", output: 3 },
    ],
  },
  {
    id: 18,
    title: "Is Even or Odd",
    description:
      "Write a function that determines if a given number is even or odd.",
    examples: [
      { input: 6, output: "even" },
      { input: 13, output: "odd" },
    ],
  },
  {
    id: 20,
    title: "Title Case",
    description:
      "Write a function that converts the first letter of each word in a sentence to uppercase.",
    examples: [
      { input: "hello world", output: "Hello World" },
      { input: "coding challenges", output: "Coding Challenges" },
    ],
  },
  {
    id: 21,
    title: "Binary to Decimal",
    description: "Write a function that converts a binary number to decimal.",
    examples: [
      { input: "1010", output: 10 },
      { input: "1101", output: 13 },
    ],
  },
];
