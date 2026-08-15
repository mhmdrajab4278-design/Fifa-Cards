const input = document.getElementById("input");
const submit = document.getElementById("submit");
const Player_name = document.getElementById("Player-name");
const player_img = document.getElementById("player-img");
const height = document.getElementById("height-value");
const p_foot = document.getElementById("preferred-value");
const w_foot = document.getElementById("weak-value");
const weight = document.getElementById("weight-value");
const skills = document.getElementById("skill-value");
const position = document.getElementById("position-value");
const alt_position = document.getElementById("alt-value");
const pace = document.getElementById("pace-value");
const shooting = document.getElementById("shooting-value");
const passing = document.getElementById("passing-value");
const dribling = document.getElementById("dribbling-value");
const defending = document.getElementById("defending-value");
const physicality = document.getElementById("physicality-value");
const acceleration = document.getElementById("acceleration-value");
const sprint = document.getElementById("sprint-value");
const pro_acceleration = document.getElementById("pro-acceleration");
const pro_sprint = document.getElementById("pro-sprint");

const positioning = document.getElementById("positioning-value");
const pro_positioning = document.getElementById("pro-positioning");

const finishing = document.getElementById("finishing-value");
const pro_finishing = document.getElementById("pro-finishing");

const shot = document.getElementById("shot-value");
const pro_shot = document.getElementById("pro-shot");

const long_shots = document.getElementById("long-shots-value");
const pro_long_shots = document.getElementById("pro-l-shot");

const volleys = document.getElementById("volleys-value");
const pro_vollys = document.getElementById("pro-volleys");

const penaltis = document.getElementById("penalties-value");
const pro_penalties = document.getElementById("pro-penalties");

const vision = document.getElementById("vision-value");
const pro_vision = document.getElementById("pro-vision");

const crossing = document.getElementById("crossing-value");
const pro_crossing = document.getElementById("pro-crossing");

const free_kick = document.getElementById("free-kick-value");
const pro_free_kick = document.getElementById("pro-free-kick");

const short_passing = document.getElementById("short-passing-value");
const pro_short_passing = document.getElementById("pro-short-passing");

const long_passing = document.getElementById("long-passing-value");
const pro_long_passing = document.getElementById("pro-long-passing");

const curve = document.getElementById("curve-value");
const pro_curve = document.getElementById("pro-curve");


const agility = document.getElementById("agility-value");
const pro_agility = document.getElementById("pro-agility");

const balance = document.getElementById("balance-value");
const pro_balance = document.getElementById("pro-balance");

const reactions = document.getElementById("reactions-value");
const pro_reactions = document.getElementById("pro-reactions");

const controll = document.getElementById("ball-control-value");
const pro_controll = document.getElementById("pro-control");

const dribbling_stat = document.getElementById("dribbling-stat-value");
const pro_dribbling_stat = document.getElementById("pro-dribbling");

const composure = document.getElementById("composure-value");
const pro_composure = document.getElementById("pro-composure");


const interceptions = document.getElementById("interceptions-value");
const pro_interceptions = document.getElementById("pro-interceptions");

const heading = document.getElementById("heading-value");
const pro_heading = document.getElementById("pro-heading");

const def = document.getElementById("def-awareness-value");
const pro_def = document.getElementById("pro-def-awareness");

const standing_tackle = document.getElementById("standing-tackle-value");
const pro_standing_tackle = document.getElementById("pro-standing-tackle");

const sliding_tackle = document.getElementById("sliding-tackle-value");
const pro_sliding_tackle = document.getElementById("pro-sliding-tackle");


const jumping = document.getElementById("jumping-value");
const pro_jumping = document.getElementById("pro-jumping");

const stamina = document.getElementById("stamina-value");
const pro_stamina = document.getElementById("pro-stamina");

const strength = document.getElementById("strength-value");
const pro_strength = document.getElementById("pro-strength");

const aggression = document.getElementById("aggression-value");
const pro_aggression = document.getElementById("pro-aggression");

function setcolor(stat, value){
    if (stat >= 90){
        value.style.backgroundColor = "dodgerblue"
    }
    else if (stat >= 80){
        value.style.backgroundColor = "lime"
    }
    else if (stat >= 70){
        value.style.backgroundColor = "yellow"
    }
    else if (stat >= 60){
        value.style.backgroundColor = "orange"
    }
    else{
        value.style.backgroundColor = "red"
    }
}


async function getdata() {
    try{
        const response = await fetch("EAFC26-Men_1-level_20MB_minified.json");
        const data = await response.json();
        const player = data.find(player => {
            return player.Name.toLowerCase().includes(input.value.toLowerCase())
        })
        
        if(!player){
            Player_name.textContent = "player not found!";
            return;
        }
        console.log(player)
        Player_name.textContent = player.Name;
        player_img.src = player.card;
        height.textContent = player.Height;
        p_foot.textContent = player["Preferred foot"];
        w_foot.textContent = player["Weak foot"];
        weight.textContent = player.Weight;
        skills.textContent = player["Skill moves"];
        position.textContent = player.Position;
        if(!player["Alternative positions"]){
            alt_position.textContent = "Just Primary";
        }
        else{
            alt_position.textContent = player["Alternative positions"].replace("[", "").replace("]", "").replaceAll("'", "");
        }
 


        pace.textContent = player.PAC;
        shooting.textContent = player.SHO;
        passing.textContent = player.PAS;
        dribling.textContent = player.DRI;
        defending.textContent = player.DEF;
        physicality.textContent = player.PHY;
        acceleration.textContent = player.Acceleration;
        pro_acceleration.style.width = `${player.Acceleration}%`;


        sprint.textContent = player["Sprint Speed"];
        pro_sprint.style.width = `${player["Sprint Speed"]}%`;
        positioning.textContent = player.Positioning;
        pro_positioning.style.width = `${player.Positioning}%`;

        finishing.textContent = player.Finishing;
        pro_finishing.style.width = `${player.Finishing}%`;

        shot.textContent = player["Shot Power"];
        pro_shot.style.width = `${player["Shot Power"]}%`;

        long_shots.textContent = player["Long Shots"];
        pro_long_shots.style.width = `${player["Long Shots"]}%`;

        volleys.textContent = player.Volleys;
        pro_vollys.style.width = `${player.Volleys}%`;

        penaltis.textContent = player.Penalties;
        pro_penalties.style.width = `${player.Penalties}%`;

        vision.textContent = player.Vision;
        pro_vision.style.width = `${player.Vision}%`;

        crossing.textContent = player.Crossing;
        pro_crossing.style.width = `${player.Crossing}%`;

        free_kick.textContent = player["Free Kick Accuracy"];
        pro_free_kick.style.width = `${player["Free Kick Accuracy"]}%`;

        short_passing.textContent = player["Short Passing"];
        pro_short_passing.style.width = `${player["Short Passing"]}%`;

        long_passing.textContent = player["Long Passing"];
        pro_long_passing.style.width = `${player["Long Passing"]}%`;

        curve.textContent = player.Curve;
        pro_curve.style.width = `${player.Curve}%`;


        agility.textContent = player.Agility;
        pro_agility.style.width = `${player.Agility}%`;

        balance.textContent = player.Balance;
        pro_balance.style.width = `${player.Balance}%`;

        reactions.textContent = player.Reactions;
        pro_reactions.style.width = `${player.Reactions}%`;

        controll.textContent = player["Ball Control"];
        pro_controll.style.width = `${player["Ball Control"]}%`;

        dribbling_stat.textContent = player.Dribbling;
        pro_dribbling_stat.style.width = `${player.Dribbling}%`;

        composure.textContent = player.Composure;
        pro_composure.style.width = `${player.Composure}%`;


        interceptions.textContent = player.Interceptions;
        pro_interceptions.style.width = `${player.Interceptions}%`;

        heading.textContent = player["Heading Accuracy"];
        pro_heading.style.width = `${player["Heading Accuracy"]}%`;

        def.textContent = player["Def Awareness"];
        pro_def.style.width = `${player["Def Awareness"]}%`;

        standing_tackle.textContent = player["Standing Tackle"];
        pro_standing_tackle.style.width = `${player["Standing Tackle"]}%`;

        sliding_tackle.textContent = player["Sliding Tackle"];
        pro_sliding_tackle.style.width = `${player["Sliding Tackle"]}%`;


        jumping.textContent = player.Jumping;
        pro_jumping.style.width = `${player.Jumping}%`;

        stamina.textContent = player.Stamina;
        pro_stamina.style.width = `${player.Stamina}%`;

        strength.textContent = player.Strength;
        pro_strength.style.width = `${player.Strength}%`;

        aggression.textContent = player.Aggression;
        pro_aggression.style.width = `${player.Aggression}%`;

        setcolor(player.Acceleration, pro_acceleration);
        setcolor(player["Sprint Speed"], pro_sprint);
        setcolor(player.Positioning, pro_positioning);
        setcolor(player.Finishing, pro_finishing);
        setcolor(player["Shot Power"], pro_shot);
        setcolor(player["Long Shots"], pro_long_shots);
        setcolor(player.Volleys, pro_vollys);
        setcolor(player.Penalties, pro_penalties);

        setcolor(player.Vision, pro_vision);
        setcolor(player.Crossing, pro_crossing);
        setcolor(player["Free Kick Accuracy"], pro_free_kick);
        setcolor(player["Short Passing"], pro_short_passing);
        setcolor(player["Long Passing"], pro_long_passing);
        setcolor(player.Curve, pro_curve);

        setcolor(player.Agility, pro_agility);
        setcolor(player.Balance, pro_balance);
        setcolor(player.Reactions, pro_reactions);
        setcolor(player["Ball Control"], pro_controll);
        setcolor(player.Dribbling, pro_dribbling_stat);
        setcolor(player.Composure, pro_composure);

        setcolor(player.Interceptions, pro_interceptions);
        setcolor(player["Heading Accuracy"], pro_heading);
        setcolor(player["Def Awareness"], pro_def);
        setcolor(player["Standing Tackle"], pro_standing_tackle);
        setcolor(player["Sliding Tackle"], pro_sliding_tackle);

        setcolor(player.Jumping, pro_jumping);
        setcolor(player.Stamina, pro_stamina);
        setcolor(player.Strength, pro_strength);
        setcolor(player.Aggression, pro_aggression);





    }
    catch(error){
        console.error(error);
    }    
}

submit.addEventListener("click", event => {

    getdata();
}
)
