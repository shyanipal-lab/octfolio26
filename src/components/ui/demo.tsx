import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BentoGridShowcase } from "@/components/ui/bento-grid";
import {
  Calendar,
  HeartPulse,
  Plus,
  Slack,
  Zap,
} from "lucide-react";

// --- Helper Components for the Demo ---

export const IntegrationsCard = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-lg">Integrations</CardTitle>
      <CardDescription>
        Easily integrations of third party apps.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Calendar className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Slack className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Zap className="h-6 w-6 text-muted-foreground" />
      </div>
    </CardContent>
  </Card>
);

export const FeatureTagsCard = () => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col justify-center gap-3 p-6">
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-purple-300 py-1.5 px-3 text-purple-700 dark:border-purple-700 dark:text-purple-300"
      >
        Innovative <Plus className="h-3 w-3" />
      </Badge>
      <Badge
        variant="secondary"
        className="w-fit items-center gap-1.5 bg-purple-100 py-1.5 px-3 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-900/80"
      >
        Revolutionary
      </Badge>
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-purple-300 py-1.5 px-3 text-purple-700 dark:border-purple-700 dark:text-purple-300"
      >
        Empowering <Plus className="h-3 w-3" />
      </Badge>
    </CardContent>
  </Card>
);

export const MainFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden">
    <div className="absolute top-6 left-6 z-10 rounded-lg bg-background/50 p-2 backdrop-blur-sm">
      <p className="text-xl font-bold tracking-tighter">Doc Hands.</p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
      alt="Smiling professional woman"
      className="h-full w-full object-cover"
    />
  </Card>
);

export const StatCard = () => (
  <Card className="flex h-full flex-col justify-between bg-lime-100/80 p-6 dark:bg-lime-950/80">
    <HeartPulse className="h-8 w-8 text-lime-700 dark:text-lime-300" />
    <div>
      <p className="text-6xl font-bold text-lime-900 dark:text-lime-100">95%</p>
      <p className="text-sm text-lime-800 dark:text-lime-200">
        Clinical and Medical care satisfaction with DocHands Platforms.
      </p>
    </div>
  </Card>
);

export const SecondaryFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
      alt="Close-up of a smiling woman"
      className="h-60 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-transparent dark:from-blue-900/40" />
    <p className="absolute bottom-6 left-6 z-10 max-w-[80%] text-xl font-bold text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_30%)]">
      Small changes and big impact on the way!
    </p>
  </Card>
);

export const JourneyCard = () => (
  <Card className="relative h-full w-full overflow-hidden p-6">
    <CardTitle className="text-lg">Weekly Journey</CardTitle>
    <CardDescription>
      Workflow and Patient journey mapping within 02-03 Weeks.
    </CardDescription>
    {/* Avatar constellation */}
    <div className="absolute -right-4 -bottom-4 h-48 w-48">
      <div className="absolute top-8 left-20">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute top-24 left-8">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </Card>
);

// --- The Default Demo ---
export default function BentoGridShowcaseDemo() {
  return (
    <div className="w-full p-4 md:p-10">
      <div className="mb-8">
        <h1 className="text-center text-4xl font-bold tracking-tight">
          Virtual Medical Care
        </h1>
        <p className="text-center text-lg text-muted-foreground">
          Full range of solutions to effectively enhance your virtual care.
        </p>
      </div>

      <BentoGridShowcase
        integrations={<IntegrationsCard />}
        featureTags={<FeatureTagsCard />}
        mainFeature={<MainFeatureCard />}
        secondaryFeature={<SecondaryFeatureCard />}
        statistic={<StatCard />}
        journey={<JourneyCard />}
      />
    </div>
  );
}
