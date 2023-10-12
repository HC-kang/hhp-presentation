#! /bin/bash

npm init -y
mkdir src
mkdir test

npm i typescript
npm i -D jest
npm i -D ts-jest
npm i -D ts-node
npm i -D @types/jest

echo "{
  \"compilerOptions\": {
    \"module\": \"commonjs\",
    \"noImplicitAny\": true,
    \"removeComments\": true,
    \"preserveConstEnums\": true,
    \"sourceMap\": true,
    \"target\": \"ES6\",
    \"esModuleInterop\": true,
    \"resolveJsonModule\": true,
    \"outDir\": \"dist\"
  },
  \"include\": [\"src\",\"test\"],
  \"exclude\": [\"node_modules\"]
}
" >> tsconfig.json

echo "module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
" >> jest.config.js

echo "describe('abc', () => {
  it('cdb', () => {
    expect(1).toBe(1);
  });
});
" >> test/example.test.ts

rm package.json

echo "{
  \"name\": \"marsrover\",
  \"version\": \"1.0.0\",
  \"description\": \"\",
  \"main\": \"index.js\",
  \"scripts\": {
    \"test\": \"jest --maxWorker=1 --forceExit\",
    \"test:watch\": \"jest --maxWorker=1 --forceExit --watchAll\",
    \"test:coverage\": \"jest --maxWorker=1 --forceExit --watchAll --coverage\"
  },
  \"keywords\": [],
  \"author\": \"\",
  \"license\": \"ISC\",
  \"dependencies\": {
    \"typescript\": \"^5.0.3\"
  },
  \"devDependencies\": {
    \"@types/jest\": \"^29.5.0\",
    \"jest\": \"^29.5.0\",
    \"ts-jest\": \"^29.0.5\",
    \"ts-node\": \"^10.9.1\"
  }
}" >> package.json