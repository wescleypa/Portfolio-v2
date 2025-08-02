import { Email, GitHub, LinkedIn, LocationOn, Phone, WhatsApp, YouTube } from "@mui/icons-material";
import DirectContact from "./components/directContact";
import LocationContact from "./components/locationContact";
import NewslatterContact from "./components/newslatterContact";
import { renderSocialLink } from "../../utils";

export const components = [
  {
    icon: <Phone color="primary" />,
    title: 'Contato Direto',
    component: <DirectContact />,
    size: { xs: 12, sm: 6 }
  },
  {
    icon: <LocationOn color="primary" />,
    title: 'Localização',
    component: <LocationContact />,
    size: { xs: 12, sm: 6 }
  },
  {
    icon: <Email color="primary" />,
    title: 'Newsletter',
    component: <NewslatterContact />,
    size: { xs: 12 }
  }
];

export const socialLinks = [
  {
    icon: <GitHub />,
    url: renderSocialLink('github')
  },
  {
    icon: <LinkedIn />,
    url: renderSocialLink('linkedin')
  },
  {
    icon: <YouTube />,
    url: renderSocialLink('youtube')
  },
  {
    icon: <WhatsApp />,
    url: `https://wa.me/${process.env.REACT_APP_CONTACT_WPP}?text=Olá vim do seu Portfólio`
  }
]