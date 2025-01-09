import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsageGraphData } from 'src/app/interface/usage-graph-data';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

	getDataByType(type: string): Observable<{ title: string; gradient: string, primary: UsageGraphData[]; secondary: UsageGraphData[] }> {
		switch (type) {
			
		  case 'energy':
			return of({
			  title: "Energy consumption",
			  gradient: "from-warning-400 to-warning-500",
			  primary: [
				{ value: 21.3, unit: "kWh", description: "Total consumption today" },
				{ value: 31.4, unit: "%", description: "Current energy load" },
			  ],
			  secondary: [
				{ value: 2.3, unit: 'kWh', description: 'Lighting system' },
				{ value: 6.2, unit: 'kWh', description: 'Ventilation system' },
				{ value: 12.8, unit: 'kWh', description: 'Office equipment' },
			  ],
			});
	
		  case 'water':
			return of({
			  title: "Water consumption",
			  gradient: "from-info-400 to-info-500",
			  primary: [
				{ value: 97.2, unit: "L", description: "Total usage today" },
				{ value: 421, unit: "ml", description: "Usage per minute" },
			  ],
			  secondary: [
				{ value: 40.6, unit: 'L', description: 'Restroom usage' },
				{ value: 30, unit: 'L', description: 'Kitchen usage' },
				{ value: 27.6, unit: 'L', description: 'Other usage' },
			  ],
			});

		case 'air':
			return of({
			  title: "Environmental conditions",
			  gradient: "from-success-400 to-success-500",
			  primary: [
				{ value: 21.5, unit: '°C', description: 'Avg Temperature' },
				{ value: 35, unit: "µg/m³", description: "Particulate Matter (PM2.5)" },
			  ],
			  secondary: [
				{ value: 21, unit: '%', description: 'Oxygen Level' },
				{ value: 45, unit: '%', description: 'Humidity Level' },
				{ value: 400, unit: "ppm", description: "Carbon Dioxide (CO2)" },
			  ],
			});
	
		  default:
			return of({ title: "Unknown Widget", gradient: "bg-gradient-to-br from-light-200 to-light-100", primary: [], secondary: [] });
		}
	  }
}