import { Article, Code, Groups, Public } from "@mui/icons-material";

const stats = [
  { icon: <Code sx={{ fontSize: '3rem' }} />, value: '50', label: 'Projetos Completos' },
  { icon: <Public sx={{ fontSize: '3rem' }} />, value: '30', label: 'Clientes Atendidos' },
  { icon: <Article sx={{ fontSize: '3rem' }} />, value: '25', label: 'Artigos Publicados' },
  { icon: <Groups sx={{ fontSize: '3rem' }} />, value: '10', label: 'Anos de Experiência' }
];

export default stats;