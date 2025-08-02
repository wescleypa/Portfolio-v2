import { renderSocialLink } from "../../utils";

const projectsData = [
  {
    id: 0,
    title: "Sistema de Gestão com Yii2 + React",
    description: `Sistema simples com: Autenticação JWT, CRUD de usuários/clientes e produtos, Relatórios gráficos e estatísticas e Exportação para PDF/Excel.`,
    tags: ["React", "PHP", "Yii2", "Composer", "MySQL"],
    image: `${window.location.origin}/assets/images/project_yii.png`,
    url: `${renderSocialLink('github')}/dashboard-yii2-react`
  },
  {
    id: 1,
    title: "Minha Saudade",
    description: "Minha Saudade é uma IA emocional que simula conversas com quem deixou saudade. Ela sente, lembra e responde com empatia, ajudando no acolhimento, reconciliação e cura emocional.",
    tags: ["React", "Node.js", "MUI", "Axios", "Socket.io", "Emotion React", "Chart.js", "AWS", "R2 CF", "GenAI", "NLP", "Onesignal", "Crypto", "Elevenlabs", "node-cron", "nodemailer", "Redis", "AssemblyAI", "pdfkit"],
    image: `${window.location.origin}/assets/images/project_minha_saudade.png`,
    url: `https://www.youtube.com/watch?v=dP2Hv6Qv_lU&t=691s`
  },
  {
    id: 2,
    title: "Private Secure Chat",
    description: "O Private Secure Chat é uma aplicação de chat que prioriza a segurança e a privacidade das conversas entre os usuários. Desenvolvida com React, esta aplicação oferece um ambiente seguro para comunicação em tempo real.",
    tags: ["React", "Node.js", "Socket.io", "bcrypt", "JWT"],
    image: `${window.location.origin}/assets/images/project_secure_chat.png`,
    url: `${renderSocialLink('github')}/private-chat-security`
  }
];

export default projectsData;