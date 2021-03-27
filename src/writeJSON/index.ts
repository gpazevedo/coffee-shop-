import { writeFileSync } from 'fs'

console.log("Write File")
export const writeJSON = (path: string, json: any) => writeFileSync(path, JSON.stringify(json));