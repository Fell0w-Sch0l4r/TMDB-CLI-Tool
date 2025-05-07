import { config } from "dotenv";
import axios from "axios";
import inquirer from "inquirer";
import { abort } from "process";

interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface ApiResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

config();

//console.log(process.env.ACCESS_TOKEN_AUTH)
let url: string = "";

const answer = await inquirer.prompt([
	{
		type: "list",
		name: "things",
		message: "Which movies do you want to see?",
		choices: [
			"Currently on Theaters",
			"The most popular movies",
			"The top movies",
			"Upcoming movies",
		],
	},
]);

//console.log(answer.things)

switch (answer.things) {
	case "Currently on Theaters":
		url = "now_playing";
		break;

	case "The most popular movies":
		url = "popular";
		break;

	case "The top movies":
		url = "top_rated";
		break;

	case "Upcoming movies":
		url = "upcoming";
		break;

	default:
		console.error("Something Went Wrong :(");
		abort();
}

async function getMovies(type: string) {
	const options = {
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
		headers: {
			accept: "application/json",
			Authorization: "Bearer " + process.env.ACCESS_TOKEN_AUTH,
		},
	};

	try {
		const apiResponse = await axios.request<ApiResponse>(options);
		const movies: Movie[] = apiResponse.data.results;

		movies.forEach(({ title }) => console.log(title));
	} catch (error) {
		console.error(error);
	}
}

getMovies(url)
