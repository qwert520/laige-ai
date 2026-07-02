"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import {
  BrainCircuit, Code2, Wifi, ShoppingCart,
  Workflow, Building2,
} from "lucide-react";

const skills = [
  {
    icon: BrainCircuit,
    title: "AI智能体",
    desc: "企业AI智能体、客服智能体、销售智能体、办公智能体、知识库智能体、Agent开发",
    color: "from-[#16A34A] to-[#22C55E]",
    bgColor: "bg-[#DCFCE7] dark:bg-[#1A3A24]",
  },
  {
    icon: Code2,
    title: "软件开发",
    desc: "企业管理系统、ERP、CRM、OA、MES、CMS、小程序、APP、H5、Web、后台管理系统",
    color: "from-[#3B82F6] to-[#60A5FA]",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Wifi,
    title: "物联网开发",
    desc: "设备接入、MQTT、ESP32、Arduino、树莓派、PLC、工业物联网、智慧农业、智慧工厂",
    color: "from-[#8B5CF6] to-[#A78BFA]",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: Workflow,
    title: "AI自动化",
    desc: "自动剪辑、自动生成短视频、AI配音、AI数字人、AI直播、AI文案、AI图片生成、AI工作流",
    color: "from-[#F59E0B] to-[#FBBF24]",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: ShoppingCart,
    title: "电商服务",
    desc: "电商运营、抖音电商、视频号运营、AI运营、自动客服、商品上架、数据分析",
    color: "from-[#EF4444] to-[#F87171]",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    icon: Building2,
    title: "企业咨询",
    desc: "数字化转型、AI落地方案、企业培训、创业咨询、技术顾问",
    color: "from-[#6B7280] to-[#9CA3AF]",
    bgColor: "bg-gray-50 dark:bg-gray-900/20",
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Core Skills</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">核心能力</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              20年技术沉淀，覆盖AI智能体、软件开发、物联网、AI自动化等多个领域
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.title} delay={index * 0.1} direction="scale">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-[#16A34A]/30 hover:shadow-lg hover:shadow-[#16A34A]/5 transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 rounded-xl ${skill.bgColor} flex items-center justify-center mb-4`}>
                  <skill.icon className="w-6 h-6 text-[#16A34A]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
