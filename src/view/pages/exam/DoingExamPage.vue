<script setup lang="ts">
import BaseQuestionCard from 'src/components/base/BaseQuestionCard.vue';
import { computed, ref } from 'vue';
import ProgressCard from './components/DoingExamPage/ProgressCard.vue';

const questions = [
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    score: 1,
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '1',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '2',
    is_multiple_answers: true,
    question:
      '<p><strong>Apollo 11</strong> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p>',
    answers: [
      {
        _id: '5',
        text: 'asd',
        is_correct: true,
      },
      {
        _id: '6',
        text: 'sfg3',
      },
      {
        _id: '7',
        text: 'fefj',
        is_correct: true,
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '3',
    is_multiple_answers: true,
    question:
      '<p><strong>Apollo 11</strong> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p>',
    answers: [
      {
        _id: '5',
        text: 'asd',
        is_correct: true,
      },
      {
        _id: '6',
        text: 'sfg3',
      },
      {
        _id: '7',
        text: 'fefj',
        is_correct: true,
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
  {
    _id: '4',
    question:
      '<h1><img alt="Saturn V carrying Apollo 11" class="right" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="200px"> Apollo 11</h1>',
    answers: [
      {
        _id: '1',
        text: 'fefjssssssssssssss',
        is_correct: true,
      },
      {
        _id: '2',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '3',
        text: 'fefjssssssssssssss',
      },
      {
        _id: '4',
        text: 'fefjssssssssssssss',
      },
    ],
    user_answers: ref<string[]>([]),
    flag: ref<boolean>(false),
    ref: ref<HTMLElement | null>(null),
  },
];
const questionsShow = computed(() =>
  questions.map((question, index) => ({ ...question, index: index + 1 })),
);
const questionsProgress = computed(() =>
  questions.map((question, index) => ({
    ...question,
    index: index + 1,
    answered: question.user_answers.value.length ? true : false,
    flag: question.flag.value ? true : false,
  })),
);

const onUserAnswer = (answer: { questionIndex: number; value: string[] }) => {
  const indexInArray = answer.questionIndex - 1;
  const question = questions[indexInArray];
  question.user_answers.value = answer.value;
};
const onUserFlag = (answer: { questionIndex: number; flag: boolean }) => {
  const indexInArray = answer.questionIndex - 1;
  const question = questions[indexInArray];
  question.flag.value = answer.flag;
};
const onQuestionNavigate = (questionId: string) => {
  document.getElementById(questionId)?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <el-row :gutter="16" class="main-container">
    <el-col :lg="18">
      <el-row v-for="question in questionsShow" :key="question._id">
        <BaseQuestionCard :ref="question.ref" :question="question" @change="onUserAnswer" @flag="onUserFlag" />
      </el-row>
    </el-col>
    <el-col :lg="6" class="progress-card-container">
      <ProgressCard :questions="questionsProgress" @navigate="onQuestionNavigate" />
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.main-container {
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
}
@media (max-width: $lg) {
  .main-container {
    flex-direction: column-reverse;
    .progress-card-container {
      margin-bottom: 20px;
    }
  }
}
</style>
