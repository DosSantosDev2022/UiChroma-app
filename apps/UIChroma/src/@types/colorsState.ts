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
  warning_foreground: string // cor de contraste para warning
  success: string // cor para elementos de sucesso
  success_hover: string // hover da cor sucess
  success_foreground: string // contraste da cor sucess

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
  dark_warning_foreground: string // cor de contraste para warning
  dark_success: string // cor para elementos de sucesso
  dark_success_hover: string // hover da cor sucess
  dark_success_foreground: string // contraste da cor sucess

  dark_border: string // cor para bordas 
  dark_ring: string // cor para rings

  dark_chart1: string // core para gráficos 
  dark_chart2: string // core para gráficos
  dark_chart3: string // core para gráficos
  dark_chart4: string // core para gráficos
  dark_chart5: string // core para gráficos
}