import cron from 'node-cron';

export class Scheduler {
  static scheduleDailyScrum() {
    cron.schedule('0 9 * * *', () => {
      console.log('Triggering daily scrum meeting');
      // Add logic to initiate the Good Morning feature
    });
  }
}
