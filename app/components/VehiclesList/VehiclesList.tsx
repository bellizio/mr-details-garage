import { getVehicles } from '@/app/services/vehicles';
import Link from 'next/link';

async function VehiclesList() {
  const vehicles = await getVehicles();

  return (
    <ul className="list-none">
      {vehicles.map((vehicle) => (
        <li key={vehicle.id}>
          <Link href={`/rides/${vehicle.id}`}>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default VehiclesList;
