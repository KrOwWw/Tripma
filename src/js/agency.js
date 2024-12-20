import '/scss/about.scss';

// components
import { hideHeader } from './components/hideHeader.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useAgencySlider,
  useMeetingSlider,
} from './components/about/slider.js';
import { useToggle } from './components/about/toggleGetInTouch.js';
import { useAccordion } from './components/accordion.js';

hideHeader();
useTheme();
useBurger();
useAgencySlider();
useMeetingSlider();
useToggle();
useAccordion();
