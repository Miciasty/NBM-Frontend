import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

	getDataByType(type: string): Observable<{ title: string; description: string; color1: string; color2: string; color3: string; color4: string }> {

		switch(type) {

			case 'home':
			  return of({
				title: "Home",
				description: "The main dashboard module, providing a quick overview of all key data and functionalities.",
				color1: "#67e8f9",
				color2: "#3b82f6",
				color3: "#22c55e",
				color4: "#a5f3fc",
			  });
		  
			case 'insight':
			  return of({
				title: "Insight",
				description: "Displays detailed analytics and data insights, allowing for performance tracking and optimization.",
				color1: "#000",
				color2: "#000",
				color3: "#1d4ed8",
				color4: "#a5f3fc",
			  });
		  
			case 'safety':
			  return of({
				title: "Safety",
				description: "Provides security management features, including monitoring, alerts, and user safety settings.",
				color1: "#000",
				color2: "#000",
				color3: "#1d4ed8",
				color4: "#3b82f6",
			  });
		  
			case 'map':
			  return of({
				title: "Map",
				description: "Shows a building overview on a dynamic map, offering navigable floor plans and location data.",
				color1: "#000",
				color2: "#000",
				color3: "#1d4ed8",
				color4: "#3b82f6",
			  });
		  
			case 'access':
			  return of({
				title: "Access",
				description: "Manages access cards and permissions, controlling entry points and user-level rights.",
				color1: "#000",
				color2: "#000",
				color3: "#1d4ed8",
				color4: "#3b82f6",
			  });
		  
			case 'alerts':
			  return of({
				title: "Alerts",
				description: "Shows system logs and critical notifications, ensuring important issues are promptly addressed.",
				color1: "#000",
				color2: "#000",
				color3: "#1d4ed8",
				color4: "#3b82f6",
			  });
			
			default:
			  return of({
				title: "Unknown Widget",
				description: "No valid module data found. Please verify the widget configuration or contact support.",
				color1: "#F00",
				color2: "#F00",
				color3: "#1d4ed8",
				color4: "#3b82f6",
			  });
		  }
		
	}

}
