import { Department } from "./department.model";

export interface Employee {
    id: number;
    name: string;
    img: string;
    currentDepartment: Department;
    skills: string;
    performance: string;
}