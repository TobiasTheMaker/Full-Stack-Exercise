import express, { Express, Request, Response } from 'express';
import { generateRandomLetter, lowerDivisor } from './utils';

const app: Express = express();
const port = process.env.PORT || 3000;

interface GridData {
  grid: string[][],
  digitCode: string
}

// function to generate grid
function generateGrid(character: string) {
  let grid_size = 10;

  // pre create grid with empty/'' spaces
  const grid: string[][] = Array.from({ length: grid_size }, () => Array(grid_size).fill(''));

  // if target is provided, insert character in 20% of the grid
  if (character) {
    let counter = 0;

    do {
      // check grid position if is ''
      if (grid[Math.floor(Math.random() * grid_size)][Math.floor(Math.random() * grid_size)] === '') {
        grid[Math.floor(Math.random() * grid_size)][Math.floor(Math.random() * grid_size)] = character;
        counter++;
      }
    } while (counter < Math.floor(grid_size * grid_size * (20 / 100)))
  }

  // fill grid positions that are equal to ''
  for (let i = 0; i < grid_size; i++) {
    for (let j = 0; j < grid_size; j++) {
      grid[i][j] = (grid[i][j] === '' ? generateRandomLetter() : grid[i][j])
    }
  }

  return { grid: grid, digitCode: getCode(grid) }
}

function getCode(grid: string[][]) {

  // get seconds numbers
  let secondsNow = String(new Date().getSeconds()).padStart(2, '0');

  let firstValue = grid.flat().filter((g: string) => g === grid[parseInt(secondsNow[0])][parseInt(secondsNow[1])]).length;
  let secondValue = grid.flat().filter((g: string) => g === grid[parseInt(secondsNow[1])][parseInt(secondsNow[0])]).length;

  // return code, with lower divisor for each value
  return lowerDivisor(firstValue).toString() + lowerDivisor(secondValue).toString()
}

app.use(express.json());

// a small problm with CORS, ofc remove later
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.get('/api/grid', (req: Request, res: Response) => {
  const { character } = req.query;
  const grid: GridData = generateGrid(character as string);

  res.json(grid);
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});