import '@testing-library/jest-dom'
import { describe, it, expect } from "vitest"
import { generateCodeCss } from "@/utils/generate-Code"
import type { Theme } from "@/@types/colors-themes-types"

const lightColors: Theme['light'] = {
  background: "#ffffff",
  foreground: "#000000",
  primary: "#007bff",
  primary_hover: "#0056b3",
  primary_foreground: "#ffffff",
  secondary: "#6c757d",
  secondary_hover: "#5a6268",
  secondary_foreground: "#ffffff",
  muted: "#f8f9fa",
  muted_hover: "#e2e6ea",
  muted_foreground: "#6c757d",
  accent: "#17a2b8",
  accent_hover: "#138496",
  accent_foreground: "#ffffff",
  danger: "#dc3545",
  danger_hover: "#c82333",
  danger_foreground: "#ffffff",
  warning: "#ffc107",
  warning_hover: "#e0a800",
  warning_foreground: "#212529",
  success: "#28a745",
  success_hover: "#218838",
  success_foreground: "#ffffff",
  input: "#e9ecef",
  ring: "#dee2e6",
  border: "#ced4da",
  chart1: "#6610f2",
  chart2: "#6f42c1",
  chart3: "#e83e8c",
  chart4: "#fd7e14",
  chart5: "#20c997",
}

const darkColors: Theme['dark'] = {
  ...lightColors,
  background: "#111111",
  foreground: "#eeeeee",
  primary: "#1e90ff",
}

describe("generateCodeCss", () => {
  it("should return a CSS string with light and dark theme variables", () => {
    const css = generateCodeCss(lightColors, darkColors)

    expect(css).toBeTypeOf("string")
    expect(css.length).toBeGreaterThan(0)

    // Testa se contém cores de light theme
    expect(css).toContain(`--background: ${lightColors.background};`)
    expect(css).toContain(`--primary-hover: ${lightColors.primary_hover};`)

    // Testa se contém cores de dark theme
    expect(css).toContain('.dark')
    expect(css).toContain(`--background: ${darkColors.background};`)
    expect(css).toContain(`--primary: ${darkColors.primary};`)

    // Testa se contém animações definidas
    expect(css).toContain("@keyframes accordion-down")
    expect(css).toContain("@keyframes modal-in")
  })

  it("should include all expected CSS variables", () => {
    const css = generateCodeCss(lightColors, darkColors)

    const expectedVariables = [
      "--background",
      "--foreground",
      "--primary",
      "--primary-hover",
      "--primary-foreground",
      "--secondary",
      "--secondary-hover",
      "--secondary-foreground",
      "--muted",
      "--muted-hover",
      "--muted-foreground",
      "--accent",
      "--accent-hover",
      "--accent-foreground",
      "--danger",
      "--danger-hover",
      "--danger-foreground",
      "--warning",
      "--warning-hover",
      "--warning-foreground",
      "--success",
      "--success-hover",
      "--success-foreground",
      "--border",
      "--ring",
      "--input",
      "--chart-1",
      "--chart-2",
      "--chart-3",
      "--chart-4",
      "--chart-5",
    ]

    for (const variable of expectedVariables) {
      expect(css).toContain(variable)
    }
  })
})
