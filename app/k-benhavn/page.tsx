import type { Metadata } from "next";
import CityPage from "../components/CityPage/CityPage";

export const metadata: Metadata = {
  title: "Gulvservice i København | BM Gulvservice",
  description:
    "BM Gulvservice tilbyder professionel gulvafslibning, gulvbehandling og malerarbejde i København for både private og erhverv. Kontakt os for et uforpligtende tilbud.",
};

export default function KobenhavnPage() {
  return <CityPage city="København" />;
}
