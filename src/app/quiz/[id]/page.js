import LessonView from "@/components/LessonView";

export default async function QuizPage({ params }) {
  const { id } = await params;

  async function getLesson() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    const res = await fetch(`${baseUrl}/lessons/${id}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Lição não encontrada');
    }
    
    return res.json();
  }

  const lesson = await getLesson();
  return <LessonView lesson={lesson} />;
}