import LessonView from '../components/LessonView';

async function getLesson() {
  const res = await fetch('https://ruby-duo-api.onrender.com/lessons/3', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Falha ao buscar lição no Render');
  }
  
  return res.json();
}

export default async function Home() {
  const lesson = await getLesson();
  return <LessonView lesson={lesson} />;
}