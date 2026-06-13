# DateCrush 💙🐧

Um aplicativo web interativo, fofo e irrecusável criado com um objetivo muito especial: **chamar a Júlia para um date!** 

Construído com o ecossistema moderno da Velyx (Astro, React, Tailwind CSS e Framer Motion), o projeto conta com uma interface mobile-first, animações fluidas e uma máquina de estados interativa que torna impossível a pessoa dizer "não" (literalmente!).

## 🚀 Como Funciona

- **O Pedido:** Uma tela inicial fofa. Se a pessoa tentar clicar no botão "NÃO", ele foge de forma animada e muda de texto implorando para ela repensar.
- **O Planejamento:** Ao clicar em "SIM", abre-se um fluxo para escolher a Data, o Horário, a Comida (Pizza, Sushi, etc.) e a Atividade (Cinema, Praia, etc.).
- **A Confirmação:** Uma tela de sucesso resumindo o plano perfeito ao lado de um pinguim romântico 😎🌹.

---

## 🛠️ Como Clonar e Usar Localmente

Se você achou a ideia legal e quer testar no seu computador (ou até modificar para o seu próprio crush), fique à vontade para usar este repositório!

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) instalado (versão 18+ recomendada)
- Git

### Passos
1. Clone este repositório:
```bash
git clone https://github.com/MatheusRodriguesBrun/DateCrush.git
```
2. Entre na pasta do projeto:
```bash
cd DateCrush
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
5. Abra o seu navegador no endereço: `http://localhost:4321`

---

## 🎨 Como Customizar

Quer usar esse projeto para chamar outra pessoa para sair? É super fácil!

1. Abra o arquivo principal da lógica em `src/components/DateInviteChallenge.tsx`.
2. Você pode editar facilmente as opções de Comida (`FOOD_OPTIONS`) e Atividades (`ACTIVITY_OPTIONS`) logo no início do arquivo.
3. Se quiser trocar a cor de fundo vermelha ou o padrão de corações, basta editar o arquivo `src/pages/index.astro`.
4. Os textos do diálogo também podem ser alterados diretamente no código do React.

---

## 🤝 Como Contribuir

Achou algum bug? Teve uma ideia de uma animação mais legal ainda? Pull Requests são sempre bem-vindos!

1. Faça um Fork do projeto
2. Crie uma branch para a sua feature (`git checkout -b feature/NovaAnimacao`)
3. Faça o commit das suas alterações (`git commit -m 'feat: adicionando nova animação no botão'`)
4. Faça o push para a branch (`git push origin feature/NovaAnimacao`)
5. Abra um Pull Request!

---
*Feito com 💙, React e Astro.*
