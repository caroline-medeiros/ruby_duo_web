import HomeView from '../../components/HomeView';

async function getLessons() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/lessons`, {
      cache: 'no-store'
    });

    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar lições:", error);
    return [];
  }
}

export default async function Home() {
  const lessons = await getLessons();

  return <HomeView lessons={lessons} />;
}