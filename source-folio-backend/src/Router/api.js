import Portfolio from "../schema.js";
import express from "express";
const apiRouter = express.Router();

apiRouter.route('/getID/:id').get(async (req, res) => {
    if(req.user && (req.user.user_id === req.params.id)) {
        const id = req.params.id;
        const data = await Portfolio.findOne({"user_id": id});
        if(data) res.status(200).send(data._id);
        else res.status(400).send("Failure");
    } else {
        res.status(400).send("Failure");
    }
});

apiRouter.route('/portfolio/:id').get(async(req, res) => {
    const id = req.params.id;
    try {
        const data = await Portfolio.findById(id);
        res.json(data);
    }
    catch(e) {
        res.status(404).send("error");
    }
});

apiRouter.route('/search/name/:q').get(async(req, res) => {
    const query = req.params.q;
    try {
        const portfolios = await Portfolio.find(
            {name: { $regex: new RegExp(query, 'i') }}
        );
        res.send(portfolios);
    } catch(e) {
        res.status(404).send(e);
    }
});

apiRouter.route('/search/skills/:q').get(async(req, res) => {
    const query = req.params.q;
    try {
        const portfolios = await Portfolio.find(
            {
                $or: [
                    {
                      'mySkills.programmingSkills': {
                        $elemMatch: { skillName: { $regex: new RegExp(query, 'i') } }
                      }
                    },
                    {
                      'mySkills.toolsAndFrameworks': {
                        $elemMatch: { toolName: { $regex: new RegExp(query, 'i') } }
                      }
                    }
                ]
            }
        );
        res.send(portfolios);
    } catch(e) {
        res.status(404).send(e);
    }
});

apiRouter.route('/search/experience/:q').get(async(req, res) => {
    const query = req.params.q;
    try {
        const portfolios = await Portfolio.find(
            {
                $or: [
                    {
                      'myExperience': {
                        $elemMatch: {
                          $or: [
                            { 'company': { $regex: new RegExp(query, 'i') } },
                            { 'role': { $regex: new RegExp(query, 'i') } },
                          ],
                        },
                      },
                    },
                    { 'mainDesignations': { $regex: new RegExp(query, 'i') } },
                    { 'yearsOfExperience': { $regex: new RegExp(query, 'i') } }
                  ],
          
            }
        );
        res.send(portfolios);
    } catch(e) {
        res.status(404).send(e);
    }
});

apiRouter.route('/search/education/:q').get(async(req, res) => {
    const query = req.params.q;
    try {
        const portfolios = await Portfolio.find(
            {
                $or: [
                    {
                      'myEducation.institutionName': { $regex: new RegExp(query, 'i') }
                    },
                    {
                      'myEducation.coursePursuied': { $regex: new RegExp(query, 'i') }
                    }
                  ]
          
            }
        );
        res.send(portfolios);
    } catch(e) {
        res.status(404).send(e);
    }
});



export default apiRouter;