import { writeFileSync } from 'fs'

export const writeJSON = (path: string, json: any) => {
  console.log(`Writing to ${path}`)
  writeFileSync(path, JSON.stringify(json))
};