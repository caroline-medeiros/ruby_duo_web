import LessonView from '../components/LessonView';

async function getLesson() {
  const res = await fetch('http://localhost:3000/lessons/5', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Falha ao buscar lição');
  }
  
  return res.json();
}

export default async function Home() {
  const lesson = await getLesson();
  return <LessonView lesson={lesson} />;
}