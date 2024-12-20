import '/scss/contact.scss';

// components
import { hideHeader } from './components/hideHeader.js';
import { useMap } from './components/contacts/map.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contacts/phone.js';
import { usePartnersSlider } from './components/home/slider.js';
import { useAccordion } from './components/accordion.js';

hideHeader();
useMap();
useTheme();
useBurger();
usePhone();
usePartnersSlider();
useAccordion();
