"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, Share2, Video } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Contact</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">联系方式</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              有AI落地需求或技术合作意向？欢迎随时联系我
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">手机</p>
                    <p className="text-base font-semibold text-foreground">136-7004-3913</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">邮箱</p>
                    <p className="text-base font-semibold text-foreground">wenlaixl@163.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">地址</p>
                    <p className="text-base font-semibold text-foreground">中国 · 随时可远程协作</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">微信</p>
                    <p className="text-base font-semibold text-foreground">扫码添加右侧二维码</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#DCFCE7] dark:bg-[#1A3A24] text-[#16A34A] text-sm font-medium">
                  <Share2 className="w-4 h-4" />
                  抖音: 来哥AI
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#DCFCE7] dark:bg-[#1A3A24] text-[#16A34A] text-sm font-medium">
                  <Video className="w-4 h-4" />
                  视频号: 来哥AI
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-xl overflow-hidden border border-border">
                  <Image src="/images/微信.png" alt="微信二维码" fill className="object-cover" />
                </div>
                <p className="text-sm font-medium text-foreground">微信二维码</p>
                <p className="text-xs text-muted-foreground">扫码添加</p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-xl overflow-hidden border border-border">
                  <Image src="/images/抖音.png" alt="抖音二维码" fill className="object-cover" />
                </div>
                <p className="text-sm font-medium text-foreground">抖音二维码</p>
                <p className="text-xs text-muted-foreground">扫码关注</p>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#16A34A]/10 to-[#22C55E]/5 border border-[#16A34A]/20">
              <h3 className="text-lg font-bold text-foreground mb-2">快速咨询</h3>
              <p className="text-sm text-muted-foreground mb-4">
                有AI落地需求、系统开发需求或技术合作意向？扫码微信，快速响应。
              </p>
              <div className="flex items-center gap-2 text-sm text-[#16A34A]">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                通常会在1小时内回复
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
