# 항해플러스 토요지식회 발표준비자료

## Description

- Testable한 코드를 작성하기 위해, 테스트가 어려운 코드(before)와 테스트가 쉬운 코드(after)를 비교해보는 자료입니다.

- 약간의 흥미 유도를 위해, 전 직장에서 주로 하던 업무를 예시로 들었습니다.
- 어디까지나, 우리 주변의 모든 곳에서 '액션', '계산', '데이터'를 구분 할 수 있다는 것을 표현하고자 했습니다.

- 일반적인 폭파 절차
  - 점화병(Bomber) -> 점화기(Igniter) -> 도전선(Wire) -> 뇌관(Primer) -> 폭약(TNT) 순서로 흐름
  - 폭약의 폭파 이외의 모든 단계는 개별 혹은 종합적으로 점검(테스트) 가능

## How to run

```bash
npm ci

npm run start:before # before 코드 실행
npm run start:after # after 코드 실행

npm run test:before # before 코드 테스트
npm run test:after # after 코드 테스트
```
