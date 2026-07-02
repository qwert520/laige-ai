"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "张总",
    company: "某制造企业",
    role: "总经理",
    content: "来哥帮我们搭建的AI客服系统，7x24小时自动回复客户咨询，客服成本降低了60%，客户满意度反而提升了。非常专业的技术团队！",
    rating: 5,
  },
  {
    name: "李经理",
    company: "某贸易公司",
    role: "运营总监",
    content: "ERP系统上线后，我们的采购、库存、销售全流程都数字化了，运营效率提升了40%以上。来哥的技术实力和服务态度都非常棒。",
    rating: 5,
  },
  {
    name: "王老板",
    company: "某电商公司",
    role: "创始人",
    content: "AI短视频矩阵帮助我们日产100+条视频，配合AI数字人直播，我们的抖音粉丝一个月增长了10倍。来哥对AI应用的理解非常深入。",
    rating: 5,
  },
  {
    name: "陈工",
    company: "某工厂",
    role: "技术负责人",
    content: "物联网设备接入系统部署后，我们能实时监控所有设备状态，故障预警非常及时，响应时间从小时级缩短到分钟级。",
    rating: 5,
  },
  {
    name: "赵总",
    company: "某科技公司",
    role: "CEO",
    content: "来哥不仅技术过硬，更难得的是他能真正理解业务需求，将AI技术与实际业务场景完美结合。我们的AI销售智能体转化率提升了35%。",
    rating: 5,
  },
  {
    name: "刘经理",
    company: "某教育机构",
    role: "市场总监",
    content: "知识库智能体帮助我们的学员7x24小时获取学习资料，大大减轻了客服压力。系统稳定，响应速度快，推荐！",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Testimonials</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">客户评价</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              来自各行各业客户的真实反馈，见证AI技术带来的价值
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#16A34A]/30 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#16A34A]/30 mb-2" />
                <p className="text-sm text-foreground leading-relaxed mb-4">{item.content}</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.company} · {item.role}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
