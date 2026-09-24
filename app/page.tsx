import { LandingPage } from "@/components/marketing/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PitchPulse | The Football Analytics Engine Built to Predict",
  description: "Track live team Elo ratings, analyze deep xG performance, and run thousands of match simulations instantly.",
};

export default function Home() {
  return <LandingPage />;
}