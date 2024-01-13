import { InternshipModel } from 'src/app/auth/model/internship.model';

export const buildCreateInternshipModel = (
  formGroupValue: any
): InternshipModel => ({
  id: Math.random().toString(36).substring(2, 10),
  title: formGroupValue['title'],
  position: formGroupValue['position'],
  description: formGroupValue['description'],
  location: formGroupValue['location'],
  workType: formGroupValue['typeOfWork'],
  technologies: formGroupValue['technologies'].map(
    (technology: string, index: number) => ({
      id: index,
      name: technology,
    })
  ),
  endDate: `${formGroupValue['endDate']['day']}/${formGroupValue['endDate']['month']}/${formGroupValue['endDate']['year']}`,
  duration:
    (formGroupValue['endDate']['year'] - new Date().getFullYear()) * 12 +
    (formGroupValue['endDate']['month'] - (new Date().getMonth() + 1)),
  salaryRange: `${formGroupValue['lowRange']}-${formGroupValue['highRange']}`,
});
