import { University } from '../Types/types';
export const GHANA_UNIVERSITIES: University[] = [
  { id: 'ug', name: 'University of Ghana', codePrefix: 'UG', adminKey: 'UG1970AS' },
  { id: 'knust', name: 'Kwame Nkrumah University of Science and Technology', codePrefix: 'KNUST', adminKey: 'KNUST1970AS' },
  { id: 'ucc', name: 'University of Cape Coast', codePrefix: 'UCC', adminKey: 'UCC1970AS' },
  { id: 'datalink', name: 'Datalink University', codePrefix: 'DL', adminKey: 'DL1970AS' },
  { id: 'uenr', name: 'University of Energy and Natural Resources', codePrefix: 'UENR', adminKey: 'UENR1970AS' },
  { id: 'uds', name: 'University for Development Studies', codePrefix: 'UDS', adminKey: 'UDS1970AS' },
  { id: 'upsa', name: 'University of Professional Studies, Accra', codePrefix: 'UPSA', adminKey: 'UPSA1970AS' },
  { id: 'umat', name: 'University of Mines and Technology', codePrefix: 'UMAT', adminKey: 'UMAT1970AS' },
  { id: 'ashesi', name: 'Ashesi University', codePrefix: 'ASH', adminKey: 'ASH1970AS' },
];
export const UNIVERSITY_STRUCTURE = {
  departments: [
    { id: 'cbas', name: 'College of Basic and Applied Sciences' },
    { id: 'coh', name: 'College of Humanities' },
    { id: 'cohs', name: 'College of Health Sciences' },
    { id: 'coe', name: 'College of Education' },
    { id: 'eng', name: 'Faculty of Engineering' },
    { id: 'bus', name: 'Business School' },
    { id: 'law', name: 'Faculty of Law' },
  ],
  courses: [
    { id: 'cs', deptId: 'cbas', name: 'BSc. Computer Science' },
    { id: 'math', deptId: 'cbas', name: 'BSc. Mathematics' },
    { id: 'pol', deptId: 'coh', name: 'BA. Political Science' },
    { id: 'med', deptId: 'cohs', name: 'Bachelor of Medicine and Surgery' },
    { id: 'llb', deptId: 'law', name: 'Bachelor of Laws (LLB)' },
  ]
};
export const MOCK_CERTIFICATES = [
  { id: 'cert-001', studentName: 'Kwame Mensah', studentId: '10823456', universityId: 'ug', department: 'cbas', course: 'BSc. Computer Science', graduationYear: '2023', status: 'APPROVED', hash: '8f3e2a1b9c0d7e6f5a4b3c2d1e0f9a8b', issueDate: '2023-06-15', uploadedBy: 'admin_ug' }
];