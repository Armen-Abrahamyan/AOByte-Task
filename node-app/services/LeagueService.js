const League = require('../models/League');

class LeagueService {
  static async getAllLeagues() {
    return League.find();          // .where() todo for others
  }

  static async createLeagues({leagues}) {
    return League.create(leagues);
  }
}

module.exports = LeagueService;
