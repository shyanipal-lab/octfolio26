/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FunPage from "./pages/FunPage";
import AboutPage from "./pages/AboutPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ResumePage from "./pages/ResumePage";
import Demo from "./pages/Demo";
import SplitAndGrowPage from "./pages/SplitAndGrowPage";
import PlaygroundLayer from "./components/PlaygroundLayer";
import ScrollToTop from "./components/ScrollToTop";
import ShyaniBot from "./components/ShyaniBot";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PlaygroundLayer />
      <ShyaniBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/split-and-grow" element={<SplitAndGrowPage />} />
      </Routes>
    </Router>
  );
}



