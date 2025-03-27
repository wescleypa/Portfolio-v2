/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Container,
  Stack,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
  styled,
  SwipeableDrawer,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar
} from '@mui/material';
import { PlayArrow, Send, KeyboardDoubleArrowDown, Bolt } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import ApiService from '../services/request';
import { useConfig } from '../contexts/config';

const AnimatedArrow = styled(Box)({
  position: 'absolute',
  right: 470,
  top: '580px'
});

const PriceText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontFamily: '"Caveat", cursive',
  position: 'absolute',
  right: '440px',
  top: '550px',
  transform: 'rotate(10deg)',
  color: theme.palette.mode === 'light' ? theme.palette.grey[800] : theme.palette.grey[300]
}));

function DrawerIA({ openIA, setOpenIA, valueIA, handleValue, styles, iaName }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const listRef = useRef(null);

  const MessageBubble = styled(Paper)(({ theme, isUser }) => ({
    maxWidth: '70%',
    padding: theme.spacing(1, 2),
    borderRadius: isUser ? '20px 20px 0 20px' : '20px 20px 20px 0',
    backgroundColor: isUser ? theme.palette.text.secondary : theme.palette.error.light,
    color: isUser ? theme.palette.primary.contrastText : theme.palette.background.paper,
    alignSelf: isUser ? 'flex-end' : 'flex-start',
    marginBottom: theme.spacing(1),
  }));

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const initialMessage = [
      {
        text: `Olá, sou a <b>${iaName}</b>, Inteligência artificial.`,
        isUser: false,
      },
      {
        text: `Como posso sanar suas dúvidas referente à Wescley, hoje?`,
        isUser: false
      }
    ];
    setMessages(initialMessage);
  }, []);

  const handleSendMessage = async () => {
    if (valueIA.trim() === '') return;

    const newMessage = {
      text: valueIA,
      isUser: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    handleValue('');

    setLoading(true);

    /*try {
      const context = messages
        .slice(-5)
        .map((msg) => ({ role: msg.isUser ? 'user' : 'assistant', content: msg.text }));

      context.push({ role: 'user', content: inputValue });

      const response = await axios.post(`${`${process.env.REACT_APP_API_URL}`}/ia`, { content: context });

      const iaResponse = {
        text: response.data.result,
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, iaResponse]);
    } catch (error) {
      console.error('Erro ao enviar mensagem para a IA:', error);
      const errorMessage = {
        text: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.',
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }*/
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={openIA}
      onClose={() => setOpenIA(false)}
      slotProps={{
        paper: {
          sx: {
            height: '80vh',
            overflow: 'visible',
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 40,
              backgroundColor: 'background.paper',
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              zIndex: -1,
            }
          }
        }
      }}
    >
      {/* Título flutuante com borda */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: '50px',
          boxShadow: 3,
          p: 1.5,
          display: 'flex',
          alignItems: 'center',
          zIndex: 1,
          border: '2px solid',  // Borda ao redor do título
          borderColor: 'error.main',  // Cor da borda (pode ser ajustada conforme necessário)
        }}
      >
        <Bolt color="error" sx={{ fontSize: '1.5rem' }} />
        <Typography
          variant="h7"
          component="span"
          sx={{
            ml: 1,
            fontWeight: 600,
            color: 'error.light',
            lineHeight: 1,
          }}
        >
          Inteligência artificial
        </Typography>
      </Box>

      <Box sx={{
        height: '100%',
        overflow: 'hidden',
        pr: 1,
        pt: 2
      }}>
        <List
          ref={listRef}
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            maxHeight: '60vh',
            minHeight: '60vh',
            mb: 2,
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'background.paper',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }}
        >
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              {!message.isUser && (
                <Avatar sx={{ bgcolor: 'error.dark', mr: 1 }}>
                  {/*<img width="100%" src={Camila} alt="Emily" />*/}
                </Avatar>
              )}
              <MessageBubble isUser={message.isUser}>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                  }
                />
              </MessageBubble>
              {message.isUser && (
                <Avatar sx={{ bgcolor: 'text.dark', ml: 1 }} />
              )}
            </ListItem>
          ))}
        </List>

      </Box>

      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <TextField
          variant="outlined"
          placeholder="Digite sua mensagem..."
          css={styles.inputField}
          value={valueIA}
          onChange={(e) => handleValue(e?.target?.value)}
          onKeyDown={handleKeyPress}
          sx={{ width: '70vw' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" css={styles.sendButton} onClick={handleSendMessage}>
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </SwipeableDrawer>
  );
}


const HeaderInput = ({ theme, styles, handleValue, valueIA, iaName }) => {
  const [openIA, setOpenIA] = useState(false);

  return (<>
    <Stack
      direction="column"
      spacing={1}
      alignItems="center"
      sx={{ mt: 6 }}
    >
      <Typography
        variant="body1"
        component="label"
        htmlFor="message-input"
        css={css`
        margin-left: ${theme.spacing(2)};
        color: ${theme.palette.text.secondary};
        font-weight: 500;
      `}
      >
        Melhor que ler...
      </Typography>

      <Box>
        <AnimatedArrow>
          <Bolt
            sx={{
              width: 71,
              color: theme.palette.mode === 'light' ? theme.palette.grey[800] : theme.palette.grey[300]
            }}
          />
        </AnimatedArrow>
        <PriceText>
          Pergunte à iA
        </PriceText>
      </Box>

      <TextField
        variant="outlined"
        placeholder="Digite sua mensagem..."
        css={styles.inputField}
        value={valueIA}
        onChange={(e) => handleValue(e?.target?.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" css={styles.sendButton} onClick={() => setOpenIA(true)}>
                <Send />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
    <DrawerIA openIA={openIA} setOpenIA={setOpenIA} valueIA={valueIA} handleValue={handleValue} styles={styles} iaName={iaName} />
  </>);
};

export default function Header({ scrollToSection }) {
  const theme = useTheme();
  const { config, setConfig } = useConfig();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [valueIA, setValueIA] = useState('Quem é Wescley ?');

  useEffect(() => {
    const start = async () => {
      await ApiService.post('/config/get')
        .then(res => {
          setConfig(res?.data[0]);
          document.title = res?.data[0]?.title;
          const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
          link.rel = 'icon';
          link.href = res?.data[0]?.icon || 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png';
          document.head.appendChild(link);
        })
        .catch(err => {
          console.error(err);
        })
    };

    start();
  }, []);

  // Estilos reutilizáveis
  const styles = {
    heading: css`
      line-height: 1.1;
      font-weight: 600;
      font-size: ${theme.typography.h3.fontSize};
      
      ${theme.breakpoints.up('sm')} {
        font-size: ${theme.typography.h2.fontSize};
      }
      
      ${theme.breakpoints.up('lg')} {
        font-size: ${theme.typography.h1.fontSize};
      }
    `,
    highlightText: css`
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        width: 100%;
        height: 10%;
        position: absolute;
        bottom: 4px;
        left: 0;
        background-color: ${theme.palette.error.light};
        z-index: -1;
      }
    `,
    playButton: css`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      
      &:hover {
        background-color: transparent;
      }
    `,
    inputField: css`
      & .MuiOutlinedInput-root {
        border-radius: 50px;
        background-color: ${theme.palette.background.paper};
        box-shadow: ${theme.shadows[1]};
        
        &:hover .MuiOutlinedInput-notchedOutline {
          transition: border-color 0.5s;
          border-color: ${theme.palette.error.main};
        }
        
        &.Mui-focused .MuiOutlinedInput-notchedOutline {
          border-width: 1px;
          border-color: ${theme.palette.error.main};
        }
      }
      
      & .MuiOutlinedInput-notchedOutline {
        border-radius: 50px;
      }
      
      & .MuiOutlinedInput-input {
        padding: 12px 20px;
      }
    `,
    sendButton: css`
      background-color: ${theme.palette.error.main};
      color: white;
      margin-right: -8px;
      &:hover {
        transition: background-color 0.2s;
        background-color: ${theme.palette.error.light};
      }
    `
  };

  // Componente de Conteúdo do Header
  const HeaderContent = () => (
    <Box css={css`flex: 1;`} id="header">
      <Typography variant="h1" css={styles.heading}>
        <Box component="span" sx={{ fontSize: { xs: 40, md: 60 } }} color="error.main">
          Olá 👋
        </Box>
        {!isMobile ? <br /> : <>&nbsp;</>}
        <Box component="span" sx={{ fontSize: { xs: 50, md: 90 } }} color="error.main">
          eu sou
        </Box>
        <br />
        <Box component="span">{config?.name}.</Box>
      </Typography>

      <Typography
        color="text.secondary"
        variant="h5"
        sx={{ fontSize: { xs: 20 } }}
        css={styles.highlightText}
      >
        {config?.label}.
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        sx={{ mt: 7, display: { md: 'flex', xs: 'none' }, justifyContent: 'center' }}
      >
        <Button
          variant="outlined"
          color="error"
          size="large"
          css={css`
            border-radius: 24px;
            padding: ${theme.spacing(1.5)} ${theme.spacing(4)};
          `}
          onClick={() => scrollToSection('about')}
        >
          <KeyboardDoubleArrowDown /> Sobre mim
        </Button>
      </Stack>
    </Box>
  );

  // Componente Visual do Header
  const HeaderVisual = () => (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: { xs: '90%', md: '100%' },
      }}
    >
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: { xs: '-20px', md: '-60px' },
        left: 0,
        zIndex: -1,
        color: `${theme.palette.mode === 'light' ?
          theme.palette.error.light :
          theme.palette.error.dark}`
      }}
      >
        <svg viewBox="0 0 578 440" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          />
        </svg>
      </Box>

      <Box sx={{
        position: 'relative',
        height: { md: '300px', xs: '200px' },
        borderRadius: `${theme.shape.borderRadius * 2}px`,
        boxShadow: `5px 5px 10px ${theme.palette.error.light}`,
        width: '100%',
        overflow: 'hidden',
      }}
      >
        <IconButton css={styles.playButton} aria-label="Play Button">
          <PlayArrow fontSize="large" />
        </IconButton>
        <Box
          component="img"
          alt="Hero Image"
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
        />
      </Box>
    </Box>
  );

  // Componente de Input

  const handleValue = (value) => {
    setValueIA(value);
  };

  return (
    <Container sx={{ p: 4 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
      >
        <HeaderContent />
        <HeaderVisual />
      </Stack>
      <HeaderInput theme={theme} styles={styles} handleValue={handleValue} valueIA={valueIA} iaName={config?.iaName} />
    </Container>
  );
}