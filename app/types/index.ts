export interface Vehicle {
  id: string;
  year: string;
  make: string;
  model: string;
  type: string;
}

export interface VehicleMaintenance {
  id: string;
  vehicle_id: string;
  description: string;
}

export interface CarTruckMaintenance extends VehicleMaintenance {
  mileage: string;
}

export interface MotorcycleMaintenance extends VehicleMaintenance {
  mileage?: string;
  hours?: string;
}
