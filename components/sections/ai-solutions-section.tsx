"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { MessageSquare, BookOpen, Bot, Play, FileText, Image, Workflow } from "lucide-react";

const solutions = [
  {
    icon: MessageSquare,
    title: "智能客服",
    desc: "7x24小时自动回复，智能问答，多轮对话，支持微信、网站、APP等多渠道接入",
  },
  {
    icon: BookOpen,
    title: "知识库智能体",
    desc: "构建企业专属知识库，AI自动检索和回答，提升信息获取效率",
  },
  {
    icon: Bot,
    title: "AI员工",
    desc: "模拟人类员工完成重复性工作，如数据录入、报表生成、邮件回复等",
  },
  {
    icon: Play,
    title: "自动短视频",
    desc: "AI自动剪辑、配音、生成字幕，批量产出高质量短视频内容",
  },
  {
    icon: FileText,
    title: "AI文案",
    desc: "自动生成营销文案、产品描述、公众号文章，提升内容产出效率",
  },
  {
    icon: Image,
    title: "AI图片生成",
    desc: "AI生成产品图、海报、社交媒体配图，降低设计成本",
  },
  {
    icon: Workflow,
    title: "Agent工作流",
    desc: "可视化编排AI工作流，实现复杂业务场景的自动化处理",
  },
];

export function AISolutionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">AI Solutions</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">AI解决方案</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              基于AI智能体技术，为企业提供完整的AI自动化解决方案
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-[#16A34A]/30 hover:shadow-lg hover:shadow-[#16A34A]/5 transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center mb-4">
                  <solution.icon className="w-5 h-5 text-[#16A34A]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
