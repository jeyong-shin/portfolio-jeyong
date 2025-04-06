import { type Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "소개 - 신제용 포트폴리오",
  description: "신제용의 소개, 커리어 이력, 가르치는 주제 및 현재 활동 내용",
}

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/avatar-placeholder.png" alt="신제용" />
            <AvatarFallback>신제용</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">신제용</h1>
            <p className="text-muted-foreground">강사 • 개발자 • AI 전문가</p>
          </div>
        </div>
        <div className="md:w-2/3">
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">소개</h2>
              <p className="mt-2 text-muted-foreground">
                안녕하세요, 신제용입니다. 저는 최신 기술을 쉽게 이해하고 가르치는 것을 좋아하는 개발자이자 강사입니다. 
                딥러닝과 LLM(Large Language Models) 분야에 특화되어 있으며, 복잡한 기술 개념을 누구나 이해할 수 있도록 
                쉽게 설명하는 데 특별한 관심을 가지고 있습니다.
              </p>
            </div>
            <Separator />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">경력</h2>
              <div className="mt-4 grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>강의 및 컨설팅</CardTitle>
                    <CardDescription>2020년 - 현재</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      기업 및 교육 기관에서 AI, 딥러닝, 웹 개발 등의 분야에서 
                      강의 및 기술 컨설팅을 제공하고 있습니다.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>시니어 개발자</CardTitle>
                    <CardDescription>2018년 - 2022년</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      대규모 애플리케이션 개발 및 유지보수, 아키텍처 설계, 팀 리딩 경험이 있습니다.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>AI 연구원</CardTitle>
                    <CardDescription>2016년 - 2018년</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      딥러닝 모델 연구 및 개발, 자연어 처리 분야 연구를 진행했습니다.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Separator />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">전문 분야</h2>
              <ul className="mt-4 grid gap-2 list-disc list-inside">
                <li>딥러닝 모델 설계 및 최적화</li>
                <li>대규모 언어 모델(LLM) 파인튜닝 및 적용</li>
                <li>웹 애플리케이션 개발 (React, Next.js)</li>
                <li>기술 강의 및 교육 컨텐츠 개발</li>
                <li>소프트웨어 아키텍처 설계</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 