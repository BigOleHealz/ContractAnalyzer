interface ScrumData {
  userId: string;
  yesterday: string;
  today: string;
  impediments: string;
  timestamp: Date;
}

export class ScrumDataService {
  private scrumData: ScrumData[] = [];

  addScrumData(data: ScrumData) {
    this.scrumData.push(data);
  }
}
