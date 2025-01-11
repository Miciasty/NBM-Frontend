import { UsageGraphData } from "./usage-graph-data";

export interface GraphData {

    title: string;
    gradient: string;
    primary: UsageGraphData[];
    secondary: UsageGraphData[];

}
