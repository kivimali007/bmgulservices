import type { Metadata } from "next";
import CityPage from "../components/CityPage/CityPage";

export const metadata: Metadata = {
  title: "Gulvservice i Glostrup | BM Gulvservice",
  description:
    "BM Gulvservice tilbyder professionel gulvafslibning, gulvbehandling og malerarbejde i Glostrup for både private og erhverv. Kontakt os for et uforpligtende tilbud.",
};

export default function GlostrupPage() {
  return <CityPage city="Glostrup" />;
}
