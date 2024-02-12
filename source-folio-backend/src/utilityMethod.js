function convertJSON(inputJSON) {
    const outputJSON = {
        "user_id": "",
    	"name": "",
        "bio": "",
    	"mainDesignations": [],
        "githubProfile": "",
    	"description": "",
    	"yearsOfExperience": "",
        "numberOfProjects": "",
    	"myEducation": [],
    
    	"myExperience": [],
    
    	"myProjects": [],
    
    	"mySkills": {
    		"programmingSkills": [],
    		"toolsAndFrameworks": []
    	},
    
    	"myAchievements": [],
    	"linkedIn": "",
    	"instagram": "",
    	"telephone": 0,
    	"email": ""
    };
    
    outputJSON['name'] = inputJSON['name'];
    outputJSON['bio'] = inputJSON['bio'];
    outputJSON['githubProfile'] = inputJSON['githubProfile'];
    outputJSON['yearsOfExperience'] = inputJSON['yearsOfExperience'];
    outputJSON['numberOfProjects'] = inputJSON['numberOfProjects'];
    if(typeof(inputJSON['mainDesignations']) == 'object') outputJSON['mainDesignations'] = inputJSON['mainDesignations'];
    else outputJSON['mainDesignations'].push(inputJSON['mainDesignations']);
    outputJSON['description'] = inputJSON['description'];
    if(inputJSON['profilePicture']) outputJSON['profilePicture'] = {url: inputJSON['profilePicture'].path, filename: inputJSON['profilePicture'].filename};
    outputJSON['linkedIn'] = inputJSON['linkedIn'];
    outputJSON['instagram'] = inputJSON['instagram'];
    outputJSON['telephone'] = inputJSON['telephone'];
    outputJSON['email'] = inputJSON['email'];
    if(typeof(inputJSON['myAchievements']) == 'object') outputJSON['myAchievements'] = inputJSON['myAchievements'];
    else outputJSON['myAchievements'].push(inputJSON['myAchievements']);

    if(typeof(inputJSON['institutionName']) == 'object') {
        for(let i = 0; i < inputJSON['institutionName'].length; i++) {
            const obj = {
                "institutionName": "",
                "place": "",
                "year": 0,
                "aggregate": 0,
                "coursePursuied": ""
            };
            obj['institutionName'] = inputJSON['institutionName'][i];
            obj['place'] = inputJSON['place'][i];
            obj['year'] = Number(inputJSON['year'][i]);
            obj['aggregate'] = Number(inputJSON['aggregate'][i]);
            obj['coursePursuied'] = inputJSON['coursePursuied'][i];
            
            outputJSON['myEducation'].push(obj);
        }
    } else if(inputJSON['institutionName']) {
        const obj = {
            "institutionName": "",
            "place": "",
            "year": 0,
            "aggregate": 0,
            "coursePursuied": ""
        };
        obj['institutionName'] = inputJSON['institutionName'];
        obj['place'] = inputJSON['place'];
        obj['year'] = Number(inputJSON['year']);
        obj['aggregate'] = Number(inputJSON['aggregate']);
        obj['coursePursuied'] = inputJSON['coursePursuied'];
        outputJSON['myEducation'].push(obj);
    }
    
    if(typeof(inputJSON['role']) == 'object') {
        for(let i = 0; i < inputJSON['role'].length; i++) {
            const obj = {
                "role": "",
                "duration": {
                    "start": "",
                    "end": ""
                },
                "company": "",
                "workDescription": [],
                "certificate": ""
            };
            
            obj["role"] = inputJSON["role"][i];
            obj["company"] = inputJSON["company"][i];
            if(inputJSON["certificate"][i])obj["certificate"] = inputJSON["certificate"][i];
            obj["duration"]["start"] = inputJSON["start"][i];
            obj["duration"]["end"] = inputJSON["end"][i];
            if(typeof(inputJSON['workDescription_'+i]) == 'object') obj["workDescription"] = inputJSON["workDescription_" + i];
            else obj['workDescription'].push(inputJSON['workDescription_'+i]);
            outputJSON["myExperience"].push(obj);
        }
    } else if(inputJSON['role']) {
        const obj = {
            "role": "",
            "duration": {
                "start": "",
                "end": ""
            },
            "company": "",
            "workDescription": [],
            "certificate": ""
        };

        obj["role"] = inputJSON["role"];
        obj["company"] = inputJSON["company"];
        if(inputJSON["certificate"])obj["certificate"] = inputJSON["certificate"];
        obj["duration"]["start"] = inputJSON["start"];
        obj["duration"]["end"] = inputJSON["end"];
        if(typeof(inputJSON['workDescription_0']) == 'object') obj["workDescription"] = inputJSON["workDescription_0"];
        else obj['workDescription'].push(inputJSON['workDescription_0']);
        outputJSON["myExperience"].push(obj);
    }
    
    if(typeof(inputJSON['projectName']) == 'object') {
        for(let i = 0; i < inputJSON['projectName'].length; i++) {
            const obj = {
                "projectName": "",
                "description": [],
                "gitHubLink": "",
                "projectLink": "",
            };
            
            obj["projectName"] = inputJSON["projectName"][i];
            if(typeof(inputJSON['projectDescription_' + i]) == 'object') obj["description"] = inputJSON["projectDescription_" + i];
        else obj['description'].push(inputJSON['projectDescription_' + i]);
        if(inputJSON["gitHubLink"][i])obj["gitHubLink"] = inputJSON["gitHubLink"][i];
        if(inputJSON["projectLink"][i]) obj["projectLink"] = inputJSON["projectLink"][i];
            
            outputJSON["myProjects"].push(obj);
        }
    } else if(inputJSON['projectName']) {
        const obj = {
            "projectName": "",
            "description": [],
            "gitHubLink": "",
            "projectLink": "",
        };

        obj["projectName"] = inputJSON["projectName"];
        if(typeof(inputJSON['projectDescription_0']) == 'object') obj["description"] = inputJSON["projectDescription_0"];
        else obj['description'].push(inputJSON['projectDescription_0']);
        if(inputJSON["gitHubLink"])obj["gitHubLink"] = inputJSON["gitHubLink"];
        if(inputJSON["projectLink"])obj["projectLink"] = inputJSON["projectLink"];
        
        outputJSON["myProjects"].push(obj);
    }
    
    if(typeof(inputJSON['skillName']) == 'object') {
        for(let i = 0; i < inputJSON['skillName'].length; i++) {
            const obj = {
                "skillName": "",
                "skillLevel": ""
            }
            
            obj["skillName"] = inputJSON["skillName"][i];
            obj["skillLevel"] = inputJSON["skillLevel"][i];
            
            outputJSON["mySkills"]["programmingSkills"].push(obj);
        }
    } else {
        const obj = {
            "skillName": "",
            "skillLevel": ""
        }

        obj["skillName"] = inputJSON["skillName"];
        obj["skillLevel"] = inputJSON["skillLevel"];
            
        outputJSON["mySkills"]["programmingSkills"].push(obj);
    }
    
    if(typeof(inputJSON['toolName']) == 'object') {
        for(let i = 0; i < inputJSON['toolName'].length; i++) {
            const obj = {
                "toolName": "",
                "toolLevel": ""
            }
            
            obj["toolName"] = inputJSON["toolName"][i];
            obj["toolLevel"] = inputJSON["toolLevel"][i];
            
            outputJSON["mySkills"]["toolsAndFrameworks"].push(obj);
        }
    } else {
        const obj = {
            "toolName": "",
            "toolLevel": ""
        }
        
        obj["toolName"] = inputJSON["toolName"];
        obj["toolLevel"] = inputJSON["toolLevel"];
        
        outputJSON["mySkills"]["toolsAndFrameworks"].push(obj);
    }
    
    return outputJSON;
}

export default convertJSON;