"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { Code, Briefcase, Cpu, Rocket, TrendingUp, Globe } from "lucide-react";

const timeline = [
  {
    year: "2004",
    title: "开始编程之旅",
    desc: "进入软件开发领域，开始全栈技术积累",
    icon: Code,
  },
  {
    year: "2010",
    title: "电商创业",
    desc: "积累了丰富的电商运营实战经验",
    icon: Briefcase,
  },
  {
    year: "2015",
    title: "连续创业",
    desc: "多次创业经历，深入理解企业数字化需求",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "物联网开发",
    desc: "拓展物联网领域，设备接入与工业物联网",
    icon: Cpu,
  },
  {
    year: "2023",
    title: "AI转型",
    desc: "全面转型AI智能体应用，专注Agent开发",
    icon: TrendingUp,
  },
  {
    year: "2025",
    title: "来哥AI Studio",
    desc: "成立个人AI工作室，服务企业AI升级",
    icon: Globe,
  },
];

const tags = [
  "全栈开发", "AI智能体", "React/Next.js", "Node.js", "Python",
  "物联网", "电商运营", "数字化转型", "创业咨询", "短视频运营",
];

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">About Me</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">关于我</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              从程序员到创业者，从传统开发到AI智能体，20年技术积累，始终走在技术前沿。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">成长历程</h3>
              <div className="relative pl-8 border-l-2 border-[#16A34A]/20 space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -left-[39px] w-6 h-6 rounded-full bg-[#16A34A]/10 border-2 border-[#16A34A] flex items-center justify-center">
                      <item.icon className="w-3 h-3 text-[#16A34A]" />
                    </div>
                    <span className="text-sm font-bold text-[#16A34A]">{item.year}</span>
                    <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">人物介绍</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  我是<strong className="text-foreground">吴文来</strong>（昵称：来哥），1980年出生，是一位拥有20年以上软件开发经验的<strong className="text-foreground">全栈开发工程师</strong>，同时也是一名<strong className="text-foreground">AI智能体应用专家</strong>和连续创业者。
                </p>
                <p>
                  从早期的软件开发到电商创业，从物联网技术到AI智能体应用，我始终保持对技术的热爱与追求。多年的创业经历让我深刻理解企业在数字化转型中的痛点与需求。
                </p>
                <p>
                  如今，我专注于<strong className="text-foreground">AI智能体落地应用</strong>，帮助企业构建AI客服、销售智能体、办公自动化等解决方案，真正实现AI驱动的业务增长与效率提升。
                </p>
                <p>
                  同时，我也是一名自媒体博主，在抖音和视频号分享AI技术、智能体教学和创业经验，致力于让更多人了解和掌握AI技术。
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">技能标签</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#DCFCE7] dark:bg-[#1A3A24] text-[#16A34A] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
