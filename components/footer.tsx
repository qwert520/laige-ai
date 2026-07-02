"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                来哥<span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              让AI成为你的超级员工。20年全栈开发经验，专注AI智能体落地应用，帮助企业降本增效。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">导航</h3>
            <ul className="space-y-2">
              {["首页", "关于", "服务", "案例", "AI方案", "博客", "联系我"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "首页" ? "/" : `/${item === "联系我" ? "contact" : item === "AI方案" ? "ai-solutions" : item}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">服务</h3>
            <ul className="space-y-2">
              {[
                "AI智能体开发",
                "企业管理系统",
                "物联网开发",
                "AI自动化",
                "电商运营",
                "企业咨询",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                微信：扫码联系
              </li>
              <li className="text-sm text-muted-foreground">
                抖音：来哥AI
              </li>
              <li className="text-sm text-muted-foreground">
                邮箱：wenlaixl@163.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by 来哥AI Studio
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 来哥AI. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
