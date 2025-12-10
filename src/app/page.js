// src/app/page.js
import LessonView from '../components/LessonView';

async function getLesson() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
  const res = await fetch(`${baseUrl}/lessons/3`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    console.error(`Erro ao buscar: ${baseUrl}/lessons/3`);
    throw new Error('Falha ao buscar lição');
  }
  
  return res.json();
}

export default async function Home() {
  const lesson = await getLesson();
  return <LessonView lesson={lesson} />;
}