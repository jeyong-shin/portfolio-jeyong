import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                안녕하세요, 신제용입니다
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                강사 • 개발자 • LLM 전문가 • 딥러닝 엔지니어
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/about">
                <Button>
                  소개 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">연락하기</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                저는 이런 사람입니다
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                다년간의 개발 경험과 강의 경력을 바탕으로 복잡한 기술을 쉽게 설명하는 데 특화되어 있습니다.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="text-lg font-bold">강의 전문가</h3>
                <p className="text-sm text-muted-foreground">
                  최신 기술을 이해하기 쉽게 전달하는 강의 경험
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="text-lg font-bold">개발자</h3>
                <p className="text-sm text-muted-foreground">
                  실무에서 검증된 개발 지식과 프로젝트 경험
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="text-lg font-bold">AI 전문가</h3>
                <p className="text-sm text-muted-foreground">
                  LLM과 딥러닝 분야의 최신 트렌드와 기술 보유
                </p>
              </div>
            </div>
            <div>
              <Link href="/about">
                <Button variant="outline">더 알아보기</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
