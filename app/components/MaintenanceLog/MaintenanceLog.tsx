import { VehicleMaintenance } from '@/app/types';

interface MaintenanceLogProps {
  logs: Array<VehicleMaintenance>;
}

function MaintenanceLog(props: MaintenanceLogProps) {
  const { logs } = props;
  return <pre>{JSON.stringify(logs)}</pre>;
}

export default MaintenanceLog;
