class RateLimiter {
    constructor() {
      this.requestTimes = [];
      this.tokenCounts = [];
      this.dailyRequests = 0;
      this.dailyTokens = 0;
      this.lastDayReset = new Date().toDateString();
    }
  
    checkDayReset() {
      const currentDay = new Date().toDateString();
      if (this.lastDayReset !== currentDay) {
        this.dailyRequests = 0;
        this.dailyTokens = 0;
        this.lastDayReset = currentDay;
      }
    }
  
    async checkLimits() {
      this.checkDayReset();
  
     
      const now = Date.now();
      this.requestTimes = this.requestTimes.filter(time => now - time < 60000);
      this.tokenCounts = this.tokenCounts.filter(record => now - record.time < 60000);
  
 
      if (this.requestTimes.length >= 3) {
        throw new Error('Rate limit exceeded: Maximum 3 requests per minute');
      }
  
      if (this.dailyRequests >= 200) {
        throw new Error('Daily request limit exceeded: Maximum 200 requests per day');
      }
  
      const tokensPerMinute = this.tokenCounts
        .reduce((sum, record) => sum + record.tokens, 0);
      
      if (tokensPerMinute >= 40000) {
        throw new Error('Token rate limit exceeded: Maximum 40,000 tokens per minute');
      }
  
      if (this.dailyTokens >= 200000) {
        throw new Error('Daily token limit exceeded: Maximum 200,000 tokens per day');
      }
    }
  
    async logRequest(tokens) {
      this.checkDayReset();
   
      this.requestTimes.push(Date.now());
      this.tokenCounts.push({ time: Date.now(), tokens });
      this.dailyRequests += 1;
      this.dailyTokens += tokens;
   
      const minDelayBetweenRequests = 20000;  
      return new Promise(resolve => setTimeout(resolve, minDelayBetweenRequests));
    }
  
    getStatus() {
      this.checkDayReset();
      return {
        requestsLastMinute: this.requestTimes.length,
        tokensLastMinute: this.tokenCounts.reduce((sum, record) => sum + record.tokens, 0),
        dailyRequests: this.dailyRequests,
        dailyTokens: this.dailyTokens,
        limits: {
          requestsPerMinute: 3,
          tokensPerMinute: 40000,
          requestsPerDay: 200,
          tokensPerDay: 200000
        }
      };
    }
  }
  
  export const rateLimiter = new RateLimiter();