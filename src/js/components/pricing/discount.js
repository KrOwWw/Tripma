export const annualPricing = () => {
  const discountSwitcher = document.querySelector('[data-price');
  const priceStarter = document.querySelector('[data-price="starter"]');
  const pricePopular = document.querySelector('[data-price="popular"]');
  const priceEnterprise = document.querySelector('[data-price="enterprise"]');

  const dayStarter = document.querySelector('[data-day="day-starter"]');
  const dayPopular = document.querySelector('[data-day="day-popular"]');
  const dayEnterprise = document.querySelector('[data-day="day-enterprise"]');

  discountSwitcher.addEventListener('click', () => {
    if (discountSwitcher.dataset.price === 'unactive') {
      discountSwitcher.dataset.price = 'active';
      priceStarter.textContent = '$3,6';
      pricePopular.textContent = '$56,4';
      priceEnterprise.textContent = '$84';

      dayStarter.textContent = '/day';
      dayPopular.textContent = '/day';
      dayEnterprise.textContent = '/day';
    } else {
      discountSwitcher.dataset.price = 'unactive';
      priceStarter.textContent = '$100';
      pricePopular.textContent = '$1400';
      priceEnterprise.textContent = '$2100';

      dayStarter.textContent = '/mo';
      dayPopular.textContent = '/mo';
      dayEnterprise.textContent = '/mo';
    }
  });
};
