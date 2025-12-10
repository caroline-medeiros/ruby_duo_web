import EmotionRegistry from '@/emotion-registry'
import './globals.css'


export const metadata = {
  title: 'Ruby Duo',
  description: 'Aprenda Ruby na prática',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <EmotionRegistry>
          {children}
        </EmotionRegistry>
      </body>
    </html>
  )
}