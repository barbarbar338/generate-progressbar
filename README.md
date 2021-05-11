[![stars](https://img.shields.io/github/stars/barbarbar338/generate-progressbar?color=yellow&logo=github&style=for-the-badge)](https://github.com/barbarbar338/generate-progressbar)
[![license](https://img.shields.io/github/license/barbarbar338/generate-progressbar?logo=github&style=for-the-badge)](https://github.com/barbarbar338/generate-progressbar)
[![supportServer](https://img.shields.io/discord/711995199945179187?color=7289DA&label=Support&logo=discord&style=for-the-badge)](https://discord.gg/BjEJFwh)
[![forks](https://img.shields.io/github/forks/barbarbar338/generate-progressbar?color=green&logo=github&style=for-the-badge)](https://github.com/barbarbar338/generate-progressbar)
[![issues](https://img.shields.io/github/issues/barbarbar338/generate-progressbar?color=red&logo=github&style=for-the-badge)](https://github.com/barbarbar338/generate-progressbar)

<p align="center">
  <img src="https://raw.githubusercontent.com/barbarbar338/readme-template/main/icon.png" alt="Logo" width="160" height="160" />
  <h3 align="center">Simple Progressbar</h3>

  <p align="center">
    Create progressbar easily
    <br />
    <a href="https://discord.gg/BjEJFwh"><strong>Get support »</strong></a>
    <br />
    <br />
    <a href="https://github.com/barbarbar338/generate-progressbar/issues">Report Bug</a>
    ·
    <a href="https://github.com/barbarbar338/generate-progressbar/issues">Request Feature</a>
  </p>
</p>

# 📦 Installation

-   Using yarn: `yarn add generate-progressbar`
-   Using npm: `npm i generate-progressbar`

# 🤓 Usage

```ts
import { generate } from "generate-progressbar";
const bar = generate(10, 50); // bar length: 10, percentage: 50%, total length: 12
// output [▓▓▓▓▓░░░░░]
```

using custom options

```ts
import { generate /* , IProgressbarOptions */ } from "generate-progressbar";
const options /* : IProgressbarOptions*/ = {
	empty: "-",
	end: "|",
	full: "+",
	seperator: "o",
	start: "|",
};
const bar = generate(10, 50); // bar length: 10, percentage: 50%, total length: 12
// output |++++o-----|
```

# 📄 License

Copyright © 2021 [Barış DEMİRCİ](https://github.com/barbarbar338).

Distributed under the [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) License. See `LICENSE` for more information.

# 🧦 Contributing

Feel free to use GitHub's features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/my-feature`)
3. Run prettier and eslint (`npm run format && npm run lint`)
4. Commit your Changes (`git commit -m 'my awesome feature my-feature'`)
5. Push to the Branch (`git push origin feature/my-feature`)
6. Open a Pull Request

# 🔥 Show your support

Give a ⭐️ if this project helped you!

# 📞 Contact

-   Mail: demirci.baris38@gmail.com
-   Discord: https://discord.gg/BjEJFwh
-   Instagram: https://www.instagram.com/ben_baris.d/
