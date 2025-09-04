import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve))
}

function visiblePyramids(count: number) {
  switch (count) {
    case 1:
      return [true]
    case 2:
      return [false, true]
    case 3:
      return [false, true, true]
    default:
      return [true]
  }
}

async function main() {
  const height = parseInt(await ask("Escolha a altura da(s) pirâmide(s): "), 10)
  const characterToDraw = (await ask("Escolha o caractere para desenhar: ")).trim() || "*"
  const count = parseInt(await ask("Escolha a quantidade de pirâmides (1, 2 ou 3)? "), 10)
  const inverted = await ask("A pirâmide será invertida? (s/n): ")
  const isInverted = inverted.toLowerCase().startsWith("s")

  const visibleFlags = visiblePyramids(count)

  console.log("Resultado:")

  for (let i = 0; i < height; i++) {
    const lineIndex = isInverted ? i : height - i - 1
    const indent = " ".repeat(lineIndex)
    const width = (height - lineIndex) * 2 - 1
    const chars = characterToDraw.repeat(width)
    const blanks = " ".repeat(width)

    const separator = indent + " "
    const parts = visibleFlags.map((v) => indent + (v ? chars : blanks))

    console.log(parts.join(separator))
  }

  console.log(`Total de linhas desenhadas: ${height * count}`)
  console.log(`Total de caracteres desenhados: ${height * count * (characterToDraw.length + 1)}`)
  rl.close()
}

main()
