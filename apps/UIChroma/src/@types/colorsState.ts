export type ColorsState = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string
  popover: string;
  popoverForeground: string
  primary: string;
  primaryForeground: string;
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  border: string
  input: string
  ring: string
  chart1: string
  chart2: string
  chart3: string
  chart4: string
  chart5: string
  darkBackground: string;
  darkForeground: string;
  darkCard: string;
  darkCardForeground: string
  darkPopover: string;
  darkPopoverForeground: string
  darkPrimary: string;
  darkPrimaryForeground: string;
  darkSecondary: string;
  darkSecondaryForeground: string;
  darkMuted: string;
  darkMutedForeground: string;
  darkAccent: string;
  darkAccentForeground: string;
  darkDestructive: string;
  darkDestructiveForeground: string;
  darkBorder: string;
  darkInput: string;
  darkRing: string;
  darkChart1: string;
  darkChart2: string;
  darkChart3: string;
  darkChart4: string;
  darkChart5: string;
};

export type Colors = {
  // Tema modo ligth

  background: string; // cor de fundo principal
  foreground: string; // cor de contraste principal
  primary: string; // cor principal, usada para elementos importantes
  primary_hover: string // hover da cor principal
  primary_foreground: string; // contraste da cor primary
  secondary: string // cor secundaria, usada para elementos menos importantes
  secondary_hover: string // hover da cor secundária
  secondary_foreground: string // cor de contraste para secondary
  accent: string // cor para elementos de destaques
  accent_hover: string // hover da cor accent
  accent_foreground: string // cor de contraste para elementos de destaque
  muted: string // cor para elementos sem muito destaque
  muted_hover: string // hover da cor muted
  muted_foreground: string // cor de contraste para muted

  danger: string // cor para elementos de perigo
  danger_hover: string // hover da cor danger
  danger_foreground: string // cor de contraste para danger
  warning: string // cor para elementos de atenção
  warning_hover: string // hover da cor warning
  warning_foregorund: string // cor de contraste para warning
  sucess: string // cor para elementos de sucesso
  sucess_hover: string // hover da cor sucess
  sucess_foreground: string // contraste da cor sucess

  border: string // cor para bordas 
  ring: string // cor para rings

  chart1: string // core para gráficos 
  chart2: string // core para gráficos
  chart3: string // core para gráficos
  chart4: string // core para gráficos
  chart5: string // core para gráficos

  // Tema modo dark 
  dark_background: string; // cor de fundo principal
  dark_foreground: string; // cor de contraste principal
  dark_primary: string; // cor principal, usada para elementos importantes
  dark_primary_hover: string // hover da cor principal
  dark_primary_foreground: string; // contraste da cor primary
  dark_secondary: string // cor secundaria, usada para elementos menos importantes
  dark_secondary_hover: string // hover da cor secundária
  dark_secondary_foreground: string // cor de contraste para secondary
  dark_accent: string // cor para elementos de destaques
  dark_accent_hover: string // hover da cor accent
  dark_accent_foreground: string // cor de contraste para elementos de destaque
  dark_muted: string // cor para elementos sem muito destaque
  dark_muted_hover: string // hover da cor muted
  dark_muted_foreground: string // cor de contraste para muted

  dark_danger: string // cor para elementos de perigo
  dark_danger_hover: string // hover da cor danger
  dark_danger_foreground: string // cor de contraste para danger
  dark_warning: string // cor para elementos de atenção
  dark_warning_hover: string // hover da cor warning
  dark_warning_foregorund: string // cor de contraste para warning
  dark_sucess: string // cor para elementos de sucesso
  dark_sucess_hover: string // hover da cor sucess
  dark_sucess_foreground: string // contraste da cor sucess

  dark_border: string // cor para bordas 
  dark_ring: string // cor para rings

  dark_chart1: string // core para gráficos 
  dark_chart2: string // core para gráficos
  dark_chart3: string // core para gráficos
  dark_chart4: string // core para gráficos
  dark_chart5: string // core para gráficos
}