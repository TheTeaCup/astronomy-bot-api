# Astronomy Bot API

- Discord: https://discord.gg/M3cc6FW
- Site: https://astrology.mythicalbots.xyz/
- API Key: https://astrology.mythicalbots.xyz/gallery : then login and you'll find it!

## Examples

**Needs async:**

```javascript
var astronomyBotApi = require("astronomy-bot-api");
const API = new astronomyBotApi("astronomy-KEY");

let res = await API.randomImage();

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(`${res.image}`)
.setTitle(`${res.name}`)
.setURL(`https://astrology.mythicalbots.xyz/gallery/`)
.setFooter(`submitted by: ${res.user}`)

```

Response for `randomImage()`:
```
{
  id: '',
  user: '',
  image: '',
  name: ''
}
```

Error Messages:

- Astronomy API - Please give a valid API Key
- Astronomy API - You are sending too many requests, please slow down

( ᵔ ᴥ ᵔ )

