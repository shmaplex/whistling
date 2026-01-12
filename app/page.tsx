"use client";

import Image from "next/image";
import { ProductSplitSection } from "@/components/product-split-panel";
import { Logo } from "@/components/shmaplex-logo";
import { Button } from "@/components/ui/button";

export default function WhistlingLanding() {
  const scrollToScents = () => {
    const el = document.getElementById("scents");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory bg-background text-foreground">
      {/* ================= Hero ================= */}
      <section className="relative h-screen w-full snap-start">
        <div className="absolute inset-0 bg-muted" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="relative h-20 w-full sm:h-24 md:h-36">
            <Image
              src="/whistling-logo-red.svg"
              alt="Whistling logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="mt-8">
            <Button size="lg" onClick={scrollToScents}>
              Explore Scents
            </Button>
          </div>
        </div>
      </section>

      {/* ================= Scents (Mobile) ================= */}
      <section id="scents-love" className="h-screen snap-start md:hidden">
        <ProductSplitSection.Single
          title="Love"
          image="/products/love-incense-b.jpg"
          href="/scents/love"
          buttonClassName="bg-[#fd3f30] border-[#fd3f30] text-white hover:bg-[#ff5a4a]"
        />
      </section>

      <section id="scents-forest" className="h-screen snap-start md:hidden">
        <ProductSplitSection.Single
          title="Forest"
          image="/products/forest-incense-a.jpg"
          href="/scents/forest"
          buttonClassName="bg-[#d5c7ae] border-[#d5c7ae] text-[#35321e] hover:bg-[#a9a135] hover:border-[#a9a135]"
        />
      </section>

      {/* ================= Scents (Desktop) ================= */}
      <div className="hidden md:block snap-start">
        <ProductSplitSection
          id="scents"
          left={{
            title: "Love",
            image: "/products/love-incense-b.jpg",
            href: "/scents/love",
            buttonClassName:
              "bg-[#fd3f30] border-[#fd3f30] text-white hover:bg-[#ff5a4a]",
          }}
          right={{
            title: "Forest",
            image: "/products/forest-incense-a.jpg",
            href: "/scents/forest",
            buttonClassName:
              "bg-[#d5c7ae] border-[#d5c7ae] text-[#35321e] hover:bg-[#a9a135] hover:border-[#a9a135]",
          }}
        />
      </div>

      {/* ================= Craft ================= */}
      <section className="relative h-screen w-full snap-start bg-secondary flex items-center justify-center px-6 bg-cover bg-[url('/handmade-b.jpg')]">
        <div className="mx-auto max-w-xl md:max-w-4xl space-y-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Made by Hand
          </h2>
          <p className="text-base sm:text-lg max-w-[38ch]">
            Each stick is mixed, rolled, and dried by hand. No shortcuts. No
            synthetics. Just time, care, and fire.
          </p>
        </div>
      </section>

      {/* ================= Bridge ================= */}
      <section className="relative min-h-[50vh] bg-black w-full snap-start flex items-center justify-center px-6 text-center">
        <div className="flex gap-1 justify-start items-center text-background">
          <p className="text-sm">Whistling is a ritual extension of</p>
          <Logo className="text-inherit" />
          <span>.</span>
        </div>
      </section>
    </main>
  );
}
