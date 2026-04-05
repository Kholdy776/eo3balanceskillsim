var forward = {};
// Generate forward data from skills.js data
// eg skills Prince.FireArms.dep: {AttackCommand: 1} -> Prince.AttackCommand = { FireArms : 1 }
for (var className in skills) {
    forward[className] ??= {};
    var classSkills = skills[className];

    for (var classSkill in classSkills) {
        forward[className][classSkill] ??= {};
        var skillData = classSkills[classSkill];

        for (var dep in skillData.dep) {
            (forward[className][dep] ??= {})[classSkill] = skillData.dep[dep];
        }
    }
}