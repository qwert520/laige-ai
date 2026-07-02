"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { Play, Video, Clapperboard } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    title: "AI智能体入门教程",
    platform: "抖音",
    views: "1.2万",
    duration: "3:45",
  },
  {
    title: "企业AI自动化实战",
    platform: "视频号",
    views: "8千",
    duration: "5:20",
  },
  {
    title: "如何构建AI工作流",
    platform: "抖音",
    views: "2.5万",
    duration: "4:15",
  },
  {
    title: "AI数字人直播指南",
    platform: "视频号",
    views: "6千",
    duration: "6:10",
  },
  {
    title: "Next.js全栈开发教程",
    platform: "抖音",
    views: "3.1万",
    duration: "8:30",
  },
  {
    title: "创业者如何用AI提效",
    platform: "视频号",
    views: "9千",
    duration: "4:50",
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Videos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">视频展示</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              在抖音和视频号分享AI技术、创业经验和开发教程
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <ScrollReveal key={video.title} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-[#16A34A]/30 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveVideo(index)}
              >
                <div className="aspect-video bg-gradient-to-br from-[#16A34A]/20 to-[#22C55E]/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg z-10"
                  >
                    <Play className="w-6 h-6 text-[#16A34A] ml-0.5" />
                  </motion.div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      {video.platform === "抖音" ? <Clapperboard className="w-3 h-3" /> : <Video className="w-3 h-3" />}
                      {video.platform}
                    </span>
                    <span className="text-xs text-muted-foreground">{video.views}次播放</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-[#16A34A] transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
