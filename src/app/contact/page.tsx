"use client"

import { type Metadata } from "next"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// metadata cannot be used in client components, but we define it here for clarity
// and will export it from a separate server component
export const contactMetadata = {
  title: "연락처 - 신제용 포트폴리오",
  description: "신제용에게 연락하거나 메시지를 보내는 방법",
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 2글자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  message: z.string().min(10, {
    message: "메시지는 10글자 이상이어야 합니다.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // 실제 구현에서는 API 엔드포인트로 form 데이터를 전송
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast.success("메시지가 성공적으로 전송되었습니다. 감사합니다!")
    }, 1500)
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">연락처</h1>
          <p className="text-muted-foreground">
            강의 의뢰, 프로젝트 협업, 또는 궁금한 점이 있으시면 아래 양식을 통해 연락해주세요.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>메시지 보내기</CardTitle>
              <CardDescription>아래 양식을 작성하여 메시지를 보내주세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일</FormLabel>
                        <FormControl>
                          <Input placeholder="example@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>메시지</FormLabel>
                        <FormControl>
                          <textarea
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="메시지를 입력해주세요..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? "전송 중..." : "전송하기"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>연락 정보</CardTitle>
              <CardDescription>다른 방법으로 연락하실 수 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">이메일</h3>
                <p className="text-muted-foreground mt-1">contact@yourdomain.com</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-medium">소셜 미디어</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">🐦</span>
                    <a 
                      href="https://twitter.com/yourusername" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-primary hover:underline"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">💼</span>
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📝</span>
                    <a 
                      href="https://github.com/yourusername" 
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