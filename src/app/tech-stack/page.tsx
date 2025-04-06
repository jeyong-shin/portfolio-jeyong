import { type Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "기술 스택 - 신제용 포트폴리오",
  description: "신제용이 사용하는 주요 기술 스택",
}

interface TechItem {
  name: string;
  icon: string;
  description: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

export default function TechStackPage() {
  const techCategories: TechCategory[] = [
    {
      title: "프론트엔드",
      items: [
        {
          name: "React",
          icon: "🔷",
          description: "웹 UI 개발을 위한 JavaScript 라이브러리"
        },
        {
          name: "Next.js",
          icon: "▲",
          description: "React 기반의 풀스택 프레임워크"
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "유틸리티 중심의 CSS 프레임워크"
        },
        {
          name: "TypeScript",
          icon: "📘",
          description: "정적 타입을 지원하는 JavaScript 슈퍼셋"
        }
      ]
    },
    {
      title: "백엔드",
      items: [
        {
          name: "Node.js",
          icon: "🟢",
          description: "JavaScript 런타임"
        },
        {
          name: "Express",
          icon: "🚂",
          description: "Node.js를 위한 웹 프레임워크"
        },
        {
          name: "MongoDB",
          icon: "🍃",
          description: "NoSQL 문서 데이터베이스"
        },
        {
          name: "PostgreSQL",
          icon: "🐘",
          description: "강력한 관계형 데이터베이스"
        }
      ]
    },
    {
      title: "AI & 딥러닝",
      items: [
        {
          name: "PyTorch",
          icon: "🔥",
          description: "딥러닝 연구 및 개발을 위한 프레임워크"
        },
        {
          name: "TensorFlow",
          icon: "📊",
          description: "머신러닝 및 딥러닝 라이브러리"
        },
        {
          name: "Hugging Face",
          icon: "🤗",
          description: "트랜스포머 기반 모델 및 도구"
        },
        {
          name: "OpenAI API",
          icon: "🤖",
          description: "GPT 등 대규모 언어 모델 활용"
        }
      ]
    },
    {
      title: "기타 도구",
      items: [
        {
          name: "Git",
          icon: "📝",
          description: "버전 관리 시스템"
        },
        {
          name: "Docker",
          icon: "🐳",
          description: "컨테이너화 플랫폼"
        },
        {
          name: "AWS",
          icon: "☁️",
          description: "클라우드 인프라 및 서비스"
        },
        {
          name: "Vercel",
          icon: "▲",
          description: "웹 애플리케이션 배포 플랫폼"
        }
      ]
    }
  ];

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">기술 스택</h1>
          <p className="text-muted-foreground">
            저의 주요 기술 스택과 전문 도구들을 소개합니다. 다양한 프로젝트와 교육을 통해 
            아래의 기술들을 깊이 있게 다루어 왔습니다.
          </p>
        </div>
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-2xl font-semibold">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {categoryIndex < techCategories.length - 1 && <Separator className="my-6" />}
          </div>
        ))}
      </div>
    </div>
  )
} 