import { open, writeFile } from 'node:fs/promises';

const file = await open('./input/day-one-input.txt').catch((err) => {
  if (err.code === 'ENOENT') {
    console.error(`File was not found! \n ${err}`);
  } else {
    console.error(`There was an error reading that file: ${err}`);
  }
});

// const currentElfCals = []
let mostCalories = 0;
let currentElfCals = 0;
for await (const line of file.readLines()) {
  if (line === '') {
    if (currentElfCals > mostCalories) {
      mostCalories = currentElfCals;
    }
    currentElfCals = 0;
    continue;
  }
  currentElfCals += Number(line);
}

await file?.close();

writeFile('output/output.txt', mostCalories.toString());
