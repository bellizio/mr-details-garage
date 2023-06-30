export interface Vehicle {
  id: string;
  year: string;
  make: string;
  model: string;
  type: string;
}

interface VehicleMaintenanceBasics {
  id: string;
  vehicle_id: string;
  description: string;
}

interface VehicleMaintenanceWithMileage extends VehicleMaintenanceBasics {
  mileage: string;
}

interface VehicleMaintenanceWithHours extends VehicleMaintenanceBasics {
  hours: string;
}

export type VehicleMaintenance =
  | VehicleMaintenanceWithMileage
  | VehicleMaintenanceWithHours;
