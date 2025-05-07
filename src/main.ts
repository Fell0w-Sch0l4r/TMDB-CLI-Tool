import { config } from "dotenv";
import axios from "axios";
import inquirer from "inquirer";

config();

//console.log(process.env.ACCESS_TOKEN_AUTH)


const answer = await inquirer.prompt([
    {
        type: "list",
        name: "things",
        message: "Which movies do you want to see?",
        choices: ["Currently on Theaters", "The most popular", "The top movies", "Upcoming movies"]
    }
])

console.log(answer.things)