'use client'
import {
  Typography,
  Paper,
  Stack,
  Container,
  Grid,
  Chip,
  useTheme,
  Box,
  Avatar
} from '@mui/material'
import {
  RocketLaunch,  // Proatividade
  Lightbulb,     // Criatividade
  Code,          // Resolução de Problemas
  Public,        // Adaptabilidade
  Forum,         // Comunicação
  PrecisionManufacturing, // Objetividade
} from '@mui/icons-material';
import React from 'react';
import TitleSection from './components/titleSection';

const SkillCard = ({ skill }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        borderRadius: '20px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: theme.shadows[6],
          borderTop: `3px solid ${theme.palette.error.main}`
        }
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6" fontWeight={600}>{skill.title}</Typography>
        </Stack>

        <Box component="ul" sx={{
          pl: 2,
          mb: 2,
          '& li': {
            mb: 1,
            '&::marker': {
              color: theme.palette.primary.main
            }
          }
        }}>
          {skill.description.map((item, idx) => (
            <Typography key={idx} component="li" variant="body1" textAlign={'left'}>
              {item}
            </Typography>
          ))}
        </Box>

        {skill.example && (
          <Paper
            variant="outlined"
            sx={{
              p: 1.5,
              borderLeft: `3px solid ${theme.palette.success.main}`,
              backgroundColor: 'transparent'
            }}
          >
            <Typography variant="caption" color="text.secondary" fontStyle="italic">
              {skill.example}
            </Typography>
          </Paper>
        )}

        {skill.tools && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
            {skill.tools.map((tool, idx) => (
              <Chip
                key={idx}
                label={tool}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.7rem',
                  borderColor: theme.palette.divider
                }}
              />
            ))}
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default function SoftSkills() {
  const skills = [
    {
      title: "🎯 Objetividade Técnica",
      level: "Avançado",
      description: [
        "Documentação concisa de códigos e processos",
        "Reuniões com agenda focada e timebox",
        "Feedback técnico baseado em fatos"
      ],
      example: "Redução em 40% do tempo de onboarding após reformular documentação",
      tools: ["Swagger", "PDF"]
    },
    {
      title: "🚀 Proatividade",
      level: "Avançado",
      description: [
        "Identificação e correção prévia de bugs",
        "Prototipagem de melhorias sem demanda",
        "Monitoramento ativo de métricas"
      ],
      tools: ["Jira"]
    },
    {
      title: "💡 Criatividade Técnica",
      level: "Intermediário",
      description: [
        "Soluções adaptativas para problemas recorrentes usando tecnologias existentes",
        "Implementação de cache com Redis para otimizar desempenho de APIs",
        "Prototipagem rápida para testar soluções alternativas"
      ],
      example: "Redução de 35% no tempo de resposta de API através de estratégias de cache com Redis",
      tools: ["Redis", "EC2 Auto Scaling", "Socket"]
    },
    {
      title: "🧩 Resolução de Problemas",
      level: "Avançado",
      description: [
        "Metodologia: análise → prototipagem → teste",
        "Debugging complexo em sistemas distribuídos",
        "Otimização de queries e processos"
      ],
    },
    {
      title: "🌐 Adaptabilidade",
      level: "Avançado",
      description: [
        "Migração entre stacks diferentes",
        "Domínio de sistemas legacy e modernos",
        "Aprendizado rápido de novas tecnologias"
      ],
      example: "Certificação em nova linguagem em 3 meses"
    },
    {
      title: "📢 Comunicação",
      level: "Intermediário",
      description: [
        "Relatórios técnicos para diretoria",
        "Mentoria para desenvolvedores juniores",
        "Tradução de requisitos business para tech"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <TitleSection title1={'Soft'} title2={'Skills'} />

      <Grid container spacing={3} mt={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} mb={6}>
            <SkillCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}