export interface Notification {
  id: string;
  userId: string;
  platform: 'slack' | 'email';
  message: string;
  timestamp: Date;
  status: 'sent' | 'failed';
}

export class NotificationModel {
  // Implement database interaction methods here
}
