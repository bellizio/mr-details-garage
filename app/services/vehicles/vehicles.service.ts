import path from 'path';
import { promises as fs } from 'fs';
import { Vehicle } from '@/app/types';

export async function getVehicles(): Promise<Array<Vehicle>> {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/rides.json', 'utf8');

  return JSON.parse(fileContents);
}

export async function getVehicle(id: string): Promise<Vehicle> {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/rides.json', 'utf8');
  const parsedContent = JSON.parse(fileContents);
  const foundVehicle = parsedContent.filter((item: Vehicle) => item.id === id);

  return foundVehicle;
}
