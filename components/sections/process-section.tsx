"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { MessageCircle, Search, Lightbulb, Code, TestTube, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "咨询", desc: "初步沟通需求" },
  { icon: Search, title: "需求分析", desc: "深入调研业务" },
  { icon: Lightbulb, title: "方案设计", desc: "制定AI落地方案" },
  { icon: Code, title: "开发", desc: "敏捷迭代开发" },
  { icon: TestTube, title: "测试", desc: "全面质量保障" },
  { icon: Rocket, title: "上线", desc: "平稳部署交付" },
  { icon: Headphones, title: "售后", desc: "持续技术支持" },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Process</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">服务流程</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              标准化的服务流程，确保每个项目高质量交付
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#16A34A]/20 to-transparent -translate-y-1/2" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1} direction="scale">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-[#16A34A]/20 mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center text-xs font-bold text-[#16A34A]">
                    {index + 1}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
