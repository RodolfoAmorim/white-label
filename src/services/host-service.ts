import { hostsMock } from '@/mocks/host'
import { HostConfig } from '@/types/host'

export async function getHostConfig(host: string): Promise<HostConfig> {
  return new Promise((resolve) => {
    const config = hostsMock.find((h) => h.host === host) || hostsMock[0]

    setTimeout(() => resolve(config), 50)
  })
}
