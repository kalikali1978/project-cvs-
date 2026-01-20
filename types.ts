export enum UserRole { USER = 'USER', SCHOOL_ADMIN = 'SCHOOL_ADMIN', MAIN_ADMIN = 'MAIN_ADMIN' }
export enum RecordStatus { PENDING = 'PENDING', APPROVED = 'APPROVED', REJECTED = 'REJECTED' }
export interface University { id: string; name: string; codePrefix: string; adminKey?: string; }
export interface User { id: string; name: string; email: string; studentId?: string; role: UserRole; universityId?: string; }
export interface CertificateRecord { id: string; studentName: string; studentId: string; universityId: string; department: string; course: string; graduationYear: string; status: RecordStatus; hash: string; issueDate: string; uploadedBy: string; approvedBy?: string; pdfUrl?: string; }
export interface AuditLog { id: string; userId: string; userName: string; action: string; timestamp: string; details: string; }
export interface Notification { id: string; userId: string; message: string; timestamp: string; read: boolean; }