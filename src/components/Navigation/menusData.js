import {
  Article,
  Email,
  FormatQuote,
  Home,
  Person,
  QueryStats,
  Timeline,
  Work,
  WorkspacePremium,
  YouTube
} from "@mui/icons-material";

const menus = [
  { icon: <Home />, text: 'Início', section: 'header' },
  { icon: <Person />, text: 'Sobre', section: 'about' },
  { icon: <Timeline />, text: 'História', section: 'history' },
  { icon: <Work />, text: 'Projetos', section: 'projects' },
  { icon: <YouTube />, text: 'Vídeos', section: 'youtube' },
  { icon: <Article />, text: 'Artigos', section: 'blog' },
  { icon: <QueryStats />, text: 'Estatísticas', section: 'stats' },
  { icon: <FormatQuote />, text: 'Depoimentos', section: 'testimonials' },
  { icon: <WorkspacePremium />, text: 'Certificações', section: 'certifications' },
  { icon: <Email />, text: 'Contato', section: 'footer' },
];

export default menus;