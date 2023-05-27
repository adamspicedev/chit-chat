import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

interface DashboardPageProps {}

const DashboardPage = async ({}) => {
  const session = await getServerSession(authOptions)
  return <pre>{JSON.stringify(session)}</pre>
}

export default DashboardPage
