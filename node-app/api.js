const express = require('express');
const router = express.Router();

const LeagueService = require('./services/LeagueService');

router.get("/leagues", (req, res)=> {
    LeagueService.getAllLeagues()
        .then(leagues => {
          res.status(200);
            console.log("ssssssss");
          return res.json({leagues})
        })
        .catch(err => {
            res.status(400);
            console.log("Sss", err);
            return res.send({ error: err.message })
        });
});

router.post('/leagues', (req, res) => {
    LeagueService.createLeagues(req.body)
        .then(leagues => {
            res.status(200);
            console.log("ssssssss");
            return res.json({leagues})
        })
        .catch(err => {
            res.status(400);
            console.log("Sss", err);
            return res.send({ error: err.message })
        });
});

router.get("/leagues/:leagueId/teams", (req, res)=> {
    const { leagueId } = req.params;
    res.send({method: leagueId})
});

router.get("/teams/:teamId/players", (req, res)=> {
    const { teamId } = req.params;

    res.send({method: teamId})
});

router.get("/players/:id", (req, res)=> {
    const { id } = req.params;
    res.send({method: id})
});

module.exports = router;