import '/scss/main.scss';

// components
import { hideHeader } from './components/hideHeader.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { useAccordion } from './components/accordion.js';

hideHeader();
useTheme();
useBurger();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
useAccordion();
