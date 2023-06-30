import { getVehicleMaintenance } from '@/app/services/maintenance';
import { getVehicle } from '@/app/services/vehicles';
import { MaintenanceLog } from '@/app/components';

interface RidesPageProps {
  params: { id: string };
}

export default async function RidesPage(props: RidesPageProps) {
  const {
    params: { id: vehicleId },
  } = props;
  const vehicle = await getVehicle(vehicleId);
  const vehicleMaintenance = await getVehicleMaintenance(vehicleId);

  return (
    <div>
      <pre>{JSON.stringify(vehicle)}</pre>
      <MaintenanceLog logs={vehicleMaintenance} />
    </div>
  );
}
