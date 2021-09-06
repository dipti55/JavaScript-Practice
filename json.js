const Json = {
    "problems": [{
        "Diabetes":[{
            "medications":[{
                "medicationsClasses":[{
                    "className":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }],
                    "className2":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }]
                }]
            }],
            "labs":[{
                "missing_field": "missing_value"
            }]
        }],
        "Asthma":[{}]
    }]}
      
    const obj1 = Json.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug2
    const obj2 = Json.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0].associatedDrug2[0].name
    const obj3 = Json.problems[0].Diabetes[0].labs[0]
    console.log(obj3);