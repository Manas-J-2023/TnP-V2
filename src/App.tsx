import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Process from "./pages/Process";
import NotFound from "./pages/NotFound";
import NsutLoader from "./components/NsutLoader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ForRecruiters from "./pages/For-Recruiters";
import Contact from "./components/contact/Contact";
import TeamShowcase from './components/TeamShowcase/TeamShowcase';
import Pastrecruiters from "./pages/pastrecruiters";
import CourseDataVisualizer from './components/stats/CourseDataVisualizer';

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <NsutLoader onLoadingComplete={handleLoadingComplete} />
        ) : (
          <BrowserRouter>
            <ScrollToTop />
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/process" element={<Process />} />
              <Route path="/for-recruiters" element={<ForRecruiters />} />
              <Route path="/past-recruiters" element={<Pastrecruiters />} />
              <Route path="/stats" element = {<CourseDataVisualizer/>}/>

              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element = {<TeamShowcase/>}/>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
