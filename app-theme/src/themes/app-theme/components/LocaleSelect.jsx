import { Select } from '@chakra-ui/react';

const LocaleSelect = props => {
  const { locales, defaultValue } = props;
  return (
    <Select
      {...props}
      variant="flushed"
      //bg="#fff"
      color="#2e3a48"
      placeholder="Alterar Idioma"
      onChange={event => {
        const locale = locales.find(
          locale => event.target.value === locale.label
        );
        window.location.href = locale.url;
      }}
    >
      {locales.map((locale, key) => (
        <option value={locale.label} key={key}>
          {locale.label}
        </option>
      ))}
    </Select>
  );
};

export default LocaleSelect;
