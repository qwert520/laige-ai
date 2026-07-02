"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BarChart3, MessageSquare, Share2 } from "lucide-react";

export function SocialSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Social Media</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">自媒体矩阵</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              关注我的自媒体账号，获取最新AI技术动态和创业经验分享
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <ScrollReveal direction="left">
            <div className="p-8 rounded-2xl bg-card border border-border text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center mx-auto">
                <Share2 className="w-8 h-8 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">抖音</h3>
                <p className="text-sm text-muted-foreground mt-1">来哥AI</p>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#16A34A]">2000+</p>
                  <p className="text-muted-foreground">粉丝</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#16A34A]">50+</p>
                  <p className="text-muted-foreground">作品</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Users className="w-4 h-4" />
                  <span>AI分享</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <BarChart3 className="w-4 h-4" />
                  <span>智能体教学</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <MessageSquare className="w-4 h-4" />
                  <span>自动化办公</span>
                </div>
              </div>
              <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/抖音.png"
                  alt="抖音二维码"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground">扫码关注抖音</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale">
            <div className="p-8 rounded-2xl bg-card border border-border text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">视频号</h3>
                <p className="text-sm text-muted-foreground mt-1">来哥AI</p>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#16A34A]">2000+</p>
                  <p className="text-muted-foreground">粉丝</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#16A34A]">40+</p>
                  <p className="text-muted-foreground">作品</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Users className="w-4 h-4" />
                  <span>AI工具</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <BarChart3 className="w-4 h-4" />
                  <span>软件开发</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <MessageSquare className="w-4 h-4" />
                  <span>创业经验分享</span>
                </div>
              </div>
              <div className="relative w-40 h-40 mx-auto rounded-xl bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">视频号二维码</span>
              </div>
              <p className="text-xs text-muted-foreground">微信搜索"来哥AI"</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="p-8 rounded-2xl bg-card border border-border text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">微信</h3>
                <p className="text-sm text-muted-foreground mt-1">直接联系</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">扫码添加微信</p>
                <p className="text-sm text-muted-foreground">咨询合作 / 技术交流</p>
                <p className="text-sm text-muted-foreground">创业交流 / AI学习</p>
              </div>
              <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/微信.png"
                  alt="微信二维码"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground">扫码添加微信</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
