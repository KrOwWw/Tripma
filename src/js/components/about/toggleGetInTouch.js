export const useToggle = () => {
  const imgDark = document.querySelector('.content__link-dark');
  const imgWhite = document.querySelector('.content__link-white');
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataset = themeTarget.dataset;

  if (themeTargetDataset.theme === 'light') {
    imgDark.style.display = 'flex';
    imgWhite.style.display = 'none';
  } else {
    imgDark.style.display = 'none';
    imgWhite.style.display = 'flex';
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      imgDark.style.display = 'flex';
      imgWhite.style.display = 'none';
    } else {
      imgDark.style.display = 'none';
      imgWhite.style.display = 'flex';
    }
  });
};
