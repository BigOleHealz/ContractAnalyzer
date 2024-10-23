import axios from 'axios';

export class NotificationService {
  static async sendGoodMorningMessage(user: string, platform: string) {
    const message = `Good Morning, ${user}! Ready for the daily scrum?`;
    try {
      if (platform === 'slack') {
        await axios.post('https://slack.com/api/chat.postMessage', {
          text: message,
          channel: '#general',
        });
      } else if (platform === 'email') {
        // Implement email sending logic
      }
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  }
}
