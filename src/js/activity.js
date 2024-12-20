import '/scss/activity.scss';

//components
import { hideHeader } from './components/hideHeader.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useMissionSlider,
  useArticlesSlider,
} from './components/activity/slider.js';
import { useAccordion } from './components/accordion.js';

hideHeader();
useTheme();
useBurger();
useMissionSlider();
useArticlesSlider();
useAccordion();
