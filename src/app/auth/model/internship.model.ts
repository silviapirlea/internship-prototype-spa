import { WorkTypeEnum } from './work-type.enum';
import { Entity } from './entity';

export interface InternshipModel {
  id: string;
  title: string;
  position: string;
  workType: WorkTypeEnum;
  location: string;
  description: string;
  technologies: Entity[];
  endDate: string;
  duration: number; // maybe as months, make it easier (internships cant take years)
  salaryRange: string; // 100-200 as string
  organisation: Entity;
}
