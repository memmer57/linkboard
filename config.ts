import {
  Github,
  Linkedin,
  EnvelopeFill,
  Telegram,
  Messenger,
  Spotify,
  Discord,
} from "react-bootstrap-icons";

const data: Data = {
  title: "Frank's Linkboard",
  theme: "default",
  animation: {
    nameRandomizer: false,
  },
  name: "Matěj Emmer",
  description: "My socials. Feel free to text me to hang out or discuss work.",
  links: [
    {
      name: "Telegram",
      url: "https://t.me/memmer57",
      icon: Telegram,
    },
    {
      name: "Email",
      url: "mailto:matej.emmer@gmail.com",
      icon: EnvelopeFill,
    },
    {
      name: "Messenger",
      url: "https://m.me/matejemm",
      icon: Messenger,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/matej-emmer/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/memmer57",
      icon: Github,
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/user/21n3okyz2g2pj62v7mo3po2iy",
      icon: Spotify,
    },
    {
      name: "Discord: #memmer57",
      url: "https://discord.com/app",
      icon: Discord,
    },
  ],
};

export default data;
