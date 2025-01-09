import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

	private modules = [
		{
		  name: 'home',
		  data: {
			title: "Home",
			description: "The main dashboard module, providing a quick overview of all key data and functionalities.",
			color1: "#67e8f9",
			color2: "#3b82f6",
			color3: "#22c55e",
			color4: "#a5f3fc",
		  },
		  panels: [
			{ id: 'home',    classes: 'row-span-2 col-span-3', isBar: false },
			{ id: 'insight', classes: 'row-span-2 col-span-3', isBar: false },
			{ id: 'safety',  classes: 'row-span-2 col-span-3', isBar: false },
			{ id: 'map',     classes: 'row-span-2 col-span-3', isBar: false },
			{ id: 'access',  classes: 'row-span-2 col-span-3', isBar: false },
			{ id: 'alerts',  classes: 'row-span-2 col-span-3', isBar: false },
		  ]
		},
		{
		  name: 'insight',
		  data: {
			title: "Insight",
			description: "Displays detailed analytics and data insights, allowing for performance tracking and optimization.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#a5f3fc",
		  },
		  panels: [
			{ id: 'energy', classes: 'row-span-2 col-span-3', isBar: false },
			{ id: 'water',  classes: 'row-span-2 col-span-3', isBar: false },
			{ id: 'air',    classes: 'row-span-2 col-span-3', isBar: false },
		  ]
		},
		{
		  name: 'safety',
		  data: {
			title: "Safety",
			description: "Provides security management features, including monitoring, alerts, and user safety settings.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#3b82f6",
		  },
		  panels: [
			{ id: '', classes: 'row-span-2 col-span-4', isBar: true },
		  ]
		},
		{
		  name: 'map',
		  data: {
			title: "Map",
			description: "Shows a building overview on a dynamic map, offering navigable floor plans and location data.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#3b82f6",
		  },
		  panels: [
			{ id: 'terminal', classes: 'row-span-6 col-span-6 lg:row-span-3 lg:col-span-5 xl:row-span-4 xl:col-span-4', isBar: true },
		  ]
		},
		{
		  name: 'access',
		  data: {
			title: "Access",
			description: "Manages access cards and permissions, controlling entry points and user-level rights.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#3b82f6",
		  },
		  panels: [
			{ id: '', classes: 'row-span-2 col-span-3', isBar: true },
		  ]
		},
		{
		  name: 'alerts',
		  data: {
			title: "Alerts",
			description: "Shows system logs and critical notifications, ensuring important issues are promptly addressed.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#3b82f6",
		  },
		  panels: [
			{ id: '', classes: 'row-span-2 col-span-3', isBar: true },
		  ]
		},
		{
		  name: 'documents',
		  data: {
			title: "Documents",
			description: "Manage and organize building-related documents, share and collaborate.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#3b82f6",
		  },
		  panels: [
			{ id: '', classes: 'row-span-2 col-span-3', isBar: true },
		  ]
		},
		{
		  name: 'community',
		  data: {
			title: "Community",
			description: "Engage users and share updates or announcements regarding the building community.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#3b82f6",
		  },
		  panels: [
			{ id: '', classes: 'row-span-2 col-span-3', isBar: true },
		  ]
		},
		{
		  name: 'settings',
		  data: {
			title: "Settings",
			description: "System preferences and customization options for administrators.",
			color1: "#000",
			color2: "#000",
			color3: "#1d4ed8",
			color4: "#3b82f6",
		  },
		  panels: [
			{ id: '', classes: 'row-span-2 col-span-3', isBar: true },
		  ]
		},
	];

	getDataByType(type: string): Observable<{

		title: string;
		description: string;
		color1: string;
		color2: string;
		color3: string;
		color4: string;
		panels: { id: string; classes: string; isBar: boolean }[];

	}> {
		
		const found = this.modules.find(m => m.name === type);
	
		if (!found) {
		  
		  return of({
			title: "Unknown Widget",
			description: "No valid module data found. Please verify the widget configuration or contact support.",
			color1: "#F00",
			color2: "#F00",
			color3: "#1d4ed8",
			color4: "#3b82f6",
			panels: []
		  });
		}
	
		return of({
		  title: found.data.title,
		  description: found.data.description,
		  color1: found.data.color1,
		  color2: found.data.color2,
		  color3: found.data.color3,
		  color4: found.data.color4,
		  panels: found.panels
		});
	}

}
