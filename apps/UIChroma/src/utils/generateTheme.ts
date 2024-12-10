import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

export const generateTheme = (baseColor: string) => {
  const base = colord(baseColor);

  return {
    name: "Base Color",
    colors: {
      // Light mode
      background: base.mix("#ffffff", 0.95).toHslString(),
      foreground: base.mix("#000000", 0.9).toHslString(),
      primary: base.toHslString(),
      primary_hover: base.mix("#ffffff", 0.2).toHslString(),
      primary_foreground: base.mix("#000000", 0.9).toHslString(),
      secondary: base.mix("#ffffff", 0.7).toHslString(),
      secondary_hover: base.mix("#ffffff", 0.6).toHslString(),
      secondary_foreground: base.mix("#000000", 0.8).toHslString(),
      muted: base.mix("#ffffff", 0.9).toHslString(),
      muted_hover: base.mix("#ffffff", 0.8).toHslString(),
      muted_foreground: base.mix("#000000", 0.7).toHslString(),
      accent: base.rotate(30).toHslString(),
      accent_hover: base.rotate(30).mix("#ffffff", 0.2).toHslString(),
      accent_foreground: base.rotate(30).mix("#000000", 0.9).toHslString(),

      danger: "hsl(0, 65%, 55%)",
      danger_hover: "hsl(0, 65%, 45%)",
      danger_foreground: "hsl(0, 0%, 98%)",
      warning: "hsl(40, 90%, 60%)",
      warning_hover: "hsl(40, 90%, 50%)",
      warning_foreground: "hsl(0, 0%, 10%)",
      success: "hsl(140, 45%, 45%)",
      success_hover: "hsl(140, 45%, 35%)",
      success_foreground: "hsl(0, 0%, 98%)",

      border: base.mix("#000000", 0.7).toHslString(),
      ring: base.mix("#000000", 0.6).toHslString(),

      chart1: base.toHslString(),
      chart2: base.rotate(60).toHslString(),
      chart3: base.rotate(120).toHslString(),
      chart4: base.rotate(180).toHslString(),
      chart5: base.rotate(240).toHslString(),

      // Dark mode
      dark_background: base.mix("#000000", 0.9).toHslString(),
      dark_foreground: base.mix("#ffffff", 0.8).toHslString(),
      dark_primary: base.mix("#000000", 0.7).toHslString(),
      dark_primary_hover: base.mix("#000000", 0.6).toHslString(),
      dark_primary_foreground: base.mix("#ffffff", 0.9).toHslString(),
      dark_secondary: base.mix("#000000", 0.8).toHslString(),
      dark_secondary_hover: base.mix("#000000", 0.7).toHslString(),
      dark_secondary_foreground: base.mix("#ffffff", 0.8).toHslString(),
      dark_muted: base.mix("#000000", 0.85).toHslString(),
      dark_muted_hover: base.mix("#000000", 0.75).toHslString(),
      dark_muted_foreground: base.mix("#ffffff", 0.7).toHslString(),
      dark_accent: base.rotate(30).mix("#000000", 0.6).toHslString(),
      dark_accent_hover: base.rotate(30).mix("#000000", 0.5).toHslString(),
      dark_accent_foreground: base.rotate(30).mix("#ffffff", 0.9).toHslString(),

      dark_danger: "hsl(0, 65%, 55%)",
      dark_danger_hover: "hsl(0, 65%, 45%)",
      dark_danger_foreground: "hsl(0, 0%, 98%)",
      dark_warning: "hsl(40, 90%, 60%)",
      dark_warning_hover: "hsl(40, 90%, 50%)",
      dark_warning_foreground: "hsl(0, 0%, 10%)",
      dark_success: "hsl(140, 45%, 45%)",
      dark_success_hover: "hsl(140, 45%, 35%)",
      dark_success_foreground: "hsl(0, 0%, 98%)",

      dark_border: base.mix("#000000", 0.8).toHslString(),
      dark_ring: base.mix("#000000", 0.7).toHslString(),

      dark_chart1: base.mix("#000000", 0.7).toHslString(),
      dark_chart2: base.rotate(60).mix("#000000", 0.7).toHslString(),
      dark_chart3: base.rotate(120).mix("#000000", 0.7).toHslString(),
      dark_chart4: base.rotate(180).mix("#000000", 0.7).toHslString(),
      dark_chart5: base.rotate(240).mix("#000000", 0.7).toHslString(),
    },
  };
};
