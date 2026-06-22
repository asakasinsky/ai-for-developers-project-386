import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const durations = [
  { id: '30', minutes: 30, name: '30 минут', description: 'Быстрый созвон' },
  { id: '60', minutes: 60, name: '60 минут', description: 'Стандартная встреча' },
  { id: '90', minutes: 90, name: '90 минут', description: 'Детальная встреча' },
]

export function DurationPage() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-8 px-4">
      <Button variant="ghost" onClick={() => navigate('/')} className="mb-6">
        <ChevronLeft className="w-4 h-4 mr-2" />
        На главную
      </Button>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Выберите длительность</h1>
        <p className="text-muted-foreground">Сколько времени вам нужно?</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 max-w-2xl mx-auto">
        {durations.map((duration) => (
          <Card
            key={duration.id}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => navigate(`/book/${duration.id}/schedule`)}
          >
            <CardContent className="pt-6 text-center">
              <h2 className="text-xl font-semibold mb-1">{duration.name}</h2>
              <p className="text-sm text-muted-foreground">{duration.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}