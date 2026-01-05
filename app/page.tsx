import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhistlingLanding() {
  return (
    <main className="relative overflow-hidden">
      {/* =====================================================
          Hero with Fullscreen Image + Logo Overlay
         ===================================================== */}
      <section className="relative min-h-screen w-full">
        {/* Image placeholder */}
        <div className="absolute inset-0 bg-muted">
          {/* Replace src later with Sora image */}
          {/* <Image
            // src="/hero/placeholder-e.webp"
            src="/hero/placeholder-d@2x.jpg"
            alt="Whistling incense atmosphere"
            fill
            priority
            className="object-cover"
          /> */}

          {/* Atmospheric overlay */}
          {/* <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-background" /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6 bg-[#FFB4CC]">
          {/* Logo placeholder */}
          <div className="relative h-24 w-full md:h-36 md:w-full">
            {/* <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" /> */}
            <Image
              src="/whistling-logo-red.svg"
              alt="Whistling logo"
              fill
              priority
              className="relative object-contain"
            />
          </div>

          {/* <Badge variant="secondary" className="mb-6">
            One of a kind
          </Badge> */}

          {/* <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Objects for living, keeping,
            <br />
            and passing the time well.
          </h1> */}

          <p className="mt-2 max-w-xl text-lg md:text-xl text-white/85 font-serif italic">
            daene &amp; rob
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-2xl bg-[#D7001C]">
              Explore Scents
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl border-border bg-background/60 backdrop-blur"
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================================
          Scents
         ===================================================== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl">Love</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Soft smoke, floral warmth, and resinous sweetness. Designed for
              closeness, memory, and slow evenings.
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl">Forest</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Grounded woods, green depth, and mineral air. A walk under canopy,
              distilled into smoke.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* =====================================================
          Craft
         ===================================================== */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-semibold">Made by Hand</h2>
          <p className="text-muted-foreground">
            Each stick is mixed, rolled, and dried by hand. No shortcuts. No
            synthetics. Just time, care, and fire.
          </p>
        </div>
      </section>

      {/* =====================================================
          Bridge to Shmaplex
         ===================================================== */}
      <section className="py-16 px-6 text-center">
        <p className="text-sm text-muted-foreground">
          Whistling is a ritual extension of{" "}
          <span className="font-medium text-foreground">Shmaplex</span>.
        </p>
      </section>
    </main>
  );
}
