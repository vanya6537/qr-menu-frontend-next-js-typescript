<p align="center">
  <img src="https://user-images.githubusercontent.com/26466516/118417547-e9409d00-b68a-11eb-8162-6afccf9288a9.png" alt="Next.js TypeScript Starter">
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=for-the-badge&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/jpedroschmitz/typescript-nextjs-starter?style=for-the-badge&color=5e17eb&labelColor=000000">

  <a href="https://twitter.com/intent/follow?screen_name=jpedroschmitz">
    <img src="https://img.shields.io/twitter/follow/jpedroschmitz?style=for-the-badge&color=5e17eb&labelColor=000000" alt="Follow @jpedroschmitz" />
  </a>
</p>

<br>

A TypeScript starter for Next.js that includes all you need to build amazing projects 🔥

- 📏 **ESLint** — Pluggable JavaScript linter
- 💖 **Prettier** - Opinionated Code Formatter
- 🐶 **Husky** — Use git hooks with ease
- 📄 **Commitizen** - Conventional commit messages CLI
- 🚓 **Commitlint** - Lint commit messages
- 🖌 **Renovate** - Dependency update tool
- 🚫 **lint-staged** - Run linters against staged git files
- 👷 **PR Workflow** - Run Type Check & Linters on pull requests
- 🗂 **Absolute import** - Import folders and files using the `@` prefix

## 🚀 Getting started

The best way to start with this template is using `create-next-app`.

```
npx create-next-app ts-next -e https://github.com/jpedroschmitz/typescript-nextjs-starter
```

If you prefer you can clone this repository and run the following commands inside the project folder:

1. `npm install` or `yarn`;
2. `yarn dev`;

To view the project open `http://localhost:3000`.

## 🤝 Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-new-feature`;
3. Commit your changes: `git commit -m 'Add some feature'`;
4. Push to the branch: `git push origin my-new-feature`.

**After your pull request is merged**, you can safely delete your branch.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

---


const titles = [
...document.querySelectorAll(`[class^="products_productsBlockTitle"]`),
].map((elem) => elem.innerText);
const positionNames = [
...document.querySelectorAll(
`[class^="position_nameAndDescriptionWrapper"] [class^="position_name"]`,
),
].map((elem) => elem.innerText);
const positionDescriptions = [
...document.querySelectorAll(
`[class^="position_nameAndDescriptionWrapper"] [class^="position_description"]`,
),
].map((elem) => elem.innerText);
const photos = [
...document.querySelectorAll(
`[class^="position_photoContainer"] [class^="position_photo"]`,
),
].map((elem) => elem.src);
const categoryIds = [
...document.querySelectorAll(`[class^="products_categoryAnchor"]`),
].map((elem) => elem.id);

const prices = [
...document.querySelectorAll(
`[class^="position_priceBlock"] [class^="position_price"]`,
),
].map((elem) => elem.innerText.slice(0, 3));

const items = positionNames.map((positionName, index) => ({
name: positionName,
description: positionDescriptions[index],
price: +prices[index],
src: photos[index],
}));

const data = titles.map((categoryTitle, i) => ({
name: categoryTitle,
items: items.slice(i * 4, (i + 1) * 4),
id: categoryIds[i],
}));
JSON.stringify(data);
