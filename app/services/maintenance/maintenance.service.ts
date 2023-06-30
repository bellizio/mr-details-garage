import path from 'path';
import { promises as fs } from 'fs';

export async function getVehicleMaintenance(vehicleId: string) {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(
    jsonDirectory + '/maintenance.json',
    'utf8'
  );
  const parsedContent = JSON.parse(fileContents);
  const vehicleMaintenance = parsedContent[vehicleId];

  return vehicleMaintenance;
}
