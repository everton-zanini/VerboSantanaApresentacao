import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Vision } from "@/components/home/vision";
import { Schedule } from "@/components/home/schedule";
import { Ministries } from "@/components/home/ministries";
import { Leadership } from "@/components/home/leadership";
import { FirstVisit } from "@/components/home/first-visit";
import { PrayerRequest } from "@/components/home/prayer-request";
import { SocialMedia } from "@/components/home/social-media";
import { Location } from "@/components/home/location";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Schedule />
      <Ministries />
      <Leadership />
      <FirstVisit />
      <PrayerRequest />
      <SocialMedia />
      <Location />
    </>
  );
}
