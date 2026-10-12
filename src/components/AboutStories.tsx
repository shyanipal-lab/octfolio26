import * as React from "react";
import { StoryViewer } from "@/components/ui/story-viewer";

const users = [
  {
    username: "Mercedes-Benz",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_logo.svg/2048px-Mercedes-Benz_logo.svg.png",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    stories: [
      { id: "mb-1", type: "image" as const, src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=1200&fit=crop" },
      { id: "mb-2", type: "video" as const, src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
      { id: "mb-3", type: "image" as const, src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=1200&fit=crop" },
    ],
  },
  {
    username: "HoShaksham",
    avatar: "https://hosaksham.in/assets/images/logo.png",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "hs-1", type: "image" as const, src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=1200&fit=crop" },
      { id: "hs-2", type: "image" as const, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop" },
    ],
  },
  {
    username: "Flits",
    avatar: "https://cdn.shopify.com/s/files/1/0016/5363/7189/files/flits-logo-new.png",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "fl-1", type: "image" as const, src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop" },
      { id: "fl-2", type: "image" as const, src: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=800&h=1200&fit=crop" },
    ],
  },
  {
    username: "Fyle",
    avatar: "https://www.fylehq.com/assets/images/fyle-logo.svg",
    timestamp: new Date(Date.now() - 10 * 60 * 1000 * 60).toISOString(),
    stories: [
      { id: "fy-1", type: "image" as const, src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1200&fit=crop" },
      { id: "fy-2", type: "image" as const, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1200&fit=crop" },
      { id: "fy-3", type: "video" as const, src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    ],
  },
  {
    username: "Mayadata",
    avatar: "https://media.licdn.com/dms/image/C4D0BAQG7_7_7_7_7/company-logo_200_200/0/1588656156543?e=2147483647&v=beta&t=v_7_7_7_7",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "md-1", type: "image" as const, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1200&fit=crop" },
      { id: "md-2", type: "image" as const, src: "https://images.unsplash.com/photo-1504868584819-f8e905263543?w=800&h=1200&fit=crop" },
    ],
  },
];

export default function AboutStories() {
  return (
    <div className="w-full mb-12">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 px-1">Recent stories</h3>
      <div className="flex gap-4 overflow-x-auto py-2 px-1 [&::-webkit-scrollbar]:hidden md:[&::-webkit-scrollbar]:block md:[&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/30">
        {users.map((user) => (
          <StoryViewer
            key={user.username}
            stories={user.stories}
            username={user.username}
            avatar={user.avatar}
            timestamp={user.timestamp}
            onStoryView={() => {}}
            onAllStoriesViewed={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
