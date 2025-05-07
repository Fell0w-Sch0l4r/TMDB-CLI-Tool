# TMDB CLI Tool

A command-line interface (CLI) tool to interact with [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api). This tool allows users to explore movies currently in theaters, popular movies, top-rated movies, and upcoming movies directly from the terminal.

## Project URL

For a detailed view of the project, visit [TMDB CLI Tool](https://roadmap.sh/projects/tmdb-cli).

## Features

-   View movies currently in theaters.
-   Explore the most popular movies.
-   Discover top-rated movies.
-   Check out upcoming movies.
-   Display results in a user-friendly format in the terminal.

## Prerequisites

-   Node.js (v18 or higher)
-   TMDB API Access Token (stored in a `.env` file)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/tmdb-cli-tool.git
    cd tmdb-cli-tool
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your TMDB API Access:
    ```env
    ACCESS_TOKEN_AUTH="your_tmdb_access_token"
    ```

## Usage

1. Run the CLI tool:

    ```bash
    npm run build
    ```

2. Follow the prompts to explore movies by category.

## Project Structure

```
.tmdb-cli-tool/
├── .env                # Environment variables (e.g., TMDB API Access Token)
├── .gitignore          # Files and directories to ignore in Git
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── src/
│   └── main.ts         # Entry point for the CLI tool
```

## API Reference

This tool uses the TMDB API. For more details, visit the [TMDB API documentation](https://www.themoviedb.org/documentation/api).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
