import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { BookingModalProvider } from "@/context/BookingModalContext";
import AutoPopup from "@/components/AutoPopup";
import { useLayoutMetrics } from "@/hooks/use-layout-metrics";

const Landing = lazy(() => import("@/pages/landing"));
const ServicesPage = lazy(() => import("@/pages/services"));
const AboutPage = lazy(() => import("@/pages/about"));
const PricingPage = lazy(() => import("@/pages/pricing"));
const ContactPage = lazy(() => import("@/pages/contact"));
const ThankYou = lazy(() => import("@/pages/thank-you"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function DeveloperRedirect() {
  if (typeof window !== "undefined") {
    window.location.replace("https://www.vikashdubey.com/");
  }
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/developer" component={DeveloperRedirect} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useLayoutMetrics();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BookingModalProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Suspense fallback={null}>
              <Router />
            </Suspense>
          </WouterRouter>
          <AutoPopup />
          <Toaster />
        </BookingModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
