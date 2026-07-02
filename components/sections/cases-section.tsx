"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Smartphone, Factory, Video, BarChart3 } from "lucide-react";

const cases = [
  {
    icon: Layers,
    title: "企业AI智能体平台",
    category: "AI案例",
    desc: "为某制造企业打造AI智能体中台，实现客服、销售、办公三大智能体协同，降低人工成本60%。",
    tags: ["AI智能体", "客服自动化", "销售智能体"],
  },
  {
    icon: BarChart3,
    title: "ERP管理系统",
    category: "管理系统",
    desc: "为贸易公司定制开发ERP系统，涵盖采购、库存、销售、财务全流程，提升运营效率40%。",
    tags: ["ERP", "React", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "电商小程序",
    category: "小程序",
    desc: "开发抖音电商小程序，集成AI商品推荐、自动客服、数据分析，月均GMV提升200%。",
    tags: ["小程序", "抖音电商", "AI推荐"],
  },
  {
    icon: Factory,
    title: "智慧工厂物联网",
    category: "物联网",
    desc: "为工厂部署MQTT设备接入系统，实现设备实时监控、预警、远程控制，故障响应时间缩短80%。",
    tags: ["MQTT", "ESP32", "PLC"],
  },
  {
    icon: Video,
    title: "AI短视频矩阵",
    category: "AI案例",
    desc: "搭建AI自动剪辑系统，日产100+条短视频，AI配音+数字人，粉丝增长10倍。",
    tags: ["AI剪辑", "数字人", "自动运营"],
  },
  {
    icon: Layers,
    title: "CRM客户管理系统",
    category: "管理系统",
    desc: "定制CRM系统，集成AI客户画像、自动跟进、销售预测，销售转化率提升35%。",
    tags: ["CRM", "AI画像", "销售预测"],
  },
];

export function CasesSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Cases</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">成功案例</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              覆盖AI智能体、企业系统、小程序、物联网等多个领域的成功项目
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-[#16A34A]/30 hover:shadow-lg hover:shadow-[#16A34A]/5 transition-all duration-300 h-full cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] dark:bg-[#1A3A24] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <span className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-1">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#16A34A]" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#DCFCE7]/50 dark:bg-[#1A3A24]/50 text-[#16A34A] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
