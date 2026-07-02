import { ScrollReveal } from "@/components/scroll-reveal";

const blogPosts = [
  {
    title: "2025年AI智能体发展趋势",
    category: "AI",
    date: "2025-01-15",
    excerpt: "AI智能体（Agent）正成为企业数字化的核心驱动力。本文深入分析2025年AI智能体的发展趋势...",
  },
  {
    title: "如何用AI智能体降低企业运营成本",
    category: "AI",
    date: "2025-01-10",
    excerpt: "通过实际案例，分享如何利用AI智能体实现客服自动化、销售自动化，降低60%运营成本。",
  },
  {
    title: "Next.js 14 全栈开发实战指南",
    category: "开发",
    date: "2024-12-28",
    excerpt: "从项目搭建到部署上线，完整讲解Next.js 14全栈开发的最佳实践。",
  },
  {
    title: "创业者如何用AI提升10倍效率",
    category: "创业",
    date: "2024-12-20",
    excerpt: "分享我在创业过程中使用AI工具提升效率的经验，涵盖文案、设计、视频等多个场景。",
  },
  {
    title: "物联网MQTT协议入门与实战",
    category: "开发",
    date: "2024-12-15",
    excerpt: "从MQTT协议原理到实际项目应用，带你快速入门物联网设备接入开发。",
  },
  {
    title: "抖音电商AI运营方法论",
    category: "电商",
    date: "2024-12-08",
    excerpt: "结合AI工具和数据分析，分享抖音电商运营的核心方法和实操技巧。",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-[#16A34A] tracking-wider uppercase">Blog</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">博客文章</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              分享AI技术、开发经验、创业心得和行业洞察
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 0.1} direction="up">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-[#16A34A]/30 transition-all duration-300 h-full cursor-pointer group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-[#DCFCE7] dark:bg-[#1A3A24] text-[#16A34A] text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#16A34A] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
