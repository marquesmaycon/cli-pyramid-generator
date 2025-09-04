# Pyramid Generator

Gerador interativo de pirâmides escrito em TypeScript/Node.js. Permite:
- Definir a altura
- Definir o caractere usado no desenho
- Escolher quantidade (1, 2 ou 3) de pirâmides
- Inverter (desenhar de cima para baixo)
- Quando 2 ou 3 piramides são exibidas, a primeira será invisível

## 🔧 Requisitos
- Node.js >= 18
- npm (ou yarn)

## ▶️ Como rodar (arquivo TypeScript)
Instale dependências e execute em modo interativo via `ts-node`:

```powershell
npm install
npm run dev
```

## 🚀 Build + execução (arquivo JavaScript)
Compilar para JavaScript e rodar a versão gerada em `dist/`:

```powershell
npm run build
npm start
```

## 💡 Uso (fluxo interativo)
Ao executar, você responderá às perguntas:
```
Escolha a altura da(s) pirâmide(s): 5
Escolha o caractere para desenhar: #
Escolha a quantidade de pirâmides (1, 2 ou 3)? 3
A pirâmide será invertida? (s/n): n
```
Saída (exemplo simplificado):
```
    2
   222
  22222 
 2222222 
222222222 
Total de linhas desenhadas: ...
Total de caracteres desenhados: ...
```

## 📄 Documentação da lógica principal
Arquivo: `index.ts`

1. Interface de leitura: usa `readline` para perguntar dados ao usuário.
2. Função `visiblePyramids(count: number)` retorna um array de flags booleanas que define quais "posições" são realmente desenhadas:
3. Cada linha:
   - `lineIndex` depende se está invertida ou não.
   - `width = (height - lineIndex) * 2 - 1` (clássica largura de pirâmide cheia).
   - Repete o caractere (`chars`) ou espaços (`blanks`).
4. Junção: cada "pilar" recebe a mesma indentação.

## 📦 Scripts disponíveis
- `npm run dev` → executa `ts-node index.ts`
- `npm run build` -> executa `tsc` e gera em `/dist` o arquivo JavaScript
- `npm start` → roda versão compilada em `dist/index.js`

---
Boas construções! 🔺
