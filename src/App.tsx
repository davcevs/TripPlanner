import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./assets/Components/Header";
import MainComponent from "./assets/Components/MainContainer";
import Footer from "./assets/Components/Footer";
import { Regions } from "./assets/types/regions.enum";
import RegionPage from "./assets/Components/RegionsPage";
import NotFound from "./assets/Components/NotFound";

export default function App() {
  const regions = Object.values(Regions);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainComponent />} />
        {regions.map((region) => (
          <Route key={region} path={`/:region`} element={<RegionPage />} />
        ))}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
