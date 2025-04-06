"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">연락처</h1>
          <p className="text-muted-foreground">
            강의 의뢰, 프로젝트 협업, 또는 궁금한 점이 있으시면 아래 정보를 통해 연락해주세요.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>연락 정보</CardTitle>
              <CardDescription>다양한 방법으로 연락하실 수 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">이메일</h3>
                <p className="text-muted-foreground mt-1">abel@even-my-dogs.com</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-medium">소셜 미디어</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">📝</span>
                    <a 
                      href="https://www.github.com/jeyong-shin/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 