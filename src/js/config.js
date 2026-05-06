export default {
  name: process.env.NAME, // actual name of the recipient (Mandatory)

  nickname: process.env.NICKNAME, // nickname(optional)

  pic: https://media.discordapp.net/attachments/1204725680978526208/1501543166329749574/Screenshot_20260506_164447_Instagram.jpg?ex=69fc748c&is=69fb230c&hm=acbd1656693b95b60543430fb73d61dc768e93920760da3cae3622c4061848ab&=&format=webp&width=418&height=525, // image url of recipients (Mandatory)

  showScrollMsg: process.env.SCROLL_MSG, // set to false if you do not want the scrolling message

  birthDate: process.env.BIRTH_DATE, // Mention birthday date in YYYY-MM-DD format
};
