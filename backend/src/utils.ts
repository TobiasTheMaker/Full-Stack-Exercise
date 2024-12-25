export function lowerDivisor(number: number) {
    return (number <= 9 ? number : (Math.floor(number / (Math.ceil(number / 9)))))
}

// function to generate random letter
export function generateRandomLetter() {
  const letters = 'abcdefghijkmnopqrstuvwxyz';
  return letters[Math.floor(Math.random() * letters.length)]
}