export type Colors = {
  light: {
    background: string // cor de fundo principal da aplicação
    foreground: string // cor de contraste principal da aplicação
    primary: string // cor principal, usada para elementos importantes
    primary_hover: string // hover da cor principal
    primary_foreground: string // contraste da cor primary
    secondary: string // cor secundaria, usada para elementos menos importantes
    secondary_hover: string // hover da cor secundária
    secondary_foreground: string // cor de contraste para secondary
    accent: string // cor para elementos de destaques
    accent_hover: string // hover da cor accent
    accent_foreground: string // cor de contraste para elementos de destaque
    muted: string // cor para elementos sem muito destaque
    muted_hover: string // hover da cor muted
    muted_foreground: string // cor de contraste para muted

    danger: string // cor para elementos de perigo em tons vermelhos
    danger_hover: string // hover da cor danger
    danger_foreground: string // cor de contraste para danger
    warning: string // cor para elementos de atenção em tons amarelos
    warning_hover: string // hover da cor warning
    warning_foreground: string // cor de contraste para warning
    success: string // cor para elementos de sucesso em tons de verde
    success_hover: string // hover da cor sucess
    success_foreground: string // contraste da cor sucess

    border: string // cor para bordas sempre suave contrastanto com a background
    ring: string // cor para rings
    input: string // cor de fundo para elementos de input , deve ser uma cor bem clara

    chart1: string // core para gráficos
    chart2: string // core para gráficos
    chart3: string // core para gráficos
    chart4: string // core para gráficos
    chart5: string // core para gráficos
  }

  dark: {
    background: string // cor de fundo principal tom bem escuro mesclado com a cor selecionada
    foreground: string // cor de contraste principal
    primary: string // cor principal, usada para elementos importantes
    primary_hover: string // hover da cor principal
    primary_foreground: string // contraste da cor primary
    secondary: string // cor secundaria, usada para elementos menos importantes
    secondary_hover: string // hover da cor secundária
    secondary_foreground: string // cor de contraste para secondary
    accent: string // cor para elementos de destaques
    accent_hover: string // hover da cor accent
    accent_foreground: string // cor de contraste para elementos de destaque
    muted: string // cor para elementos sem muito destaque cinza claro
    muted_hover: string // hover da cor muted
    muted_foreground: string // cor de contraste para muted cinza mais escuro

    danger: string // cor para elementos de perigo tons vermelho
    danger_hover: string // hover da cor danger
    danger_foreground: string // cor de contraste para danger
    warning: string // cor para elementos de atenção tons de amarelo
    warning_hover: string // hover da cor warning
    warning_foreground: string // cor de contraste para warning
    success: string // cor para elementos de sucesso tons de verde
    success_hover: string // hover da cor sucess
    success_foreground: string // contraste da cor sucess

    border: string // cor para bordas um tom escuro contrastando com background
    ring: string // cor para rings
    input: string // cor de fundo para elementos de input, deve ser tom escuro proximo da cor background

    chart1: string // core para gráficos
    chart2: string // core para gráficos
    chart3: string // core para gráficos
    chart4: string // core para gráficos
    chart5: string // core para gráficos
  }
}
