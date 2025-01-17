# Bun/Express/PostgreSQL Boilerplate

This is a boilerplate for a simple Bun-powered Express.js API and a Dockerized postgreSQL database.

Without Typescript.

## Running the API:
You will need Docker installed. Also login on your command line. Like this:
```Docker login``` Amazing work.

You will need an .env in this project, so configure that. Feel free to use the example though for just checking it out.

Then you're gonna slam this down in your command line:
- ```docker-compose up -d```

Feel free to review your logs once this works out:
- ```docker-compose logs -f```

When you spin up the project, you can review that a simple boilerplate schema and user table with ids has been generated. Tool around with from there if you want more tables and columns.

# Plans for this boilerplate:
- Command and functionality for seeding the db (ex. 'bun run seed')
- Drizzle migration script (ex. 'bun run migrate')
- ESLint set up
- Open API v3
- Test suite and folder structure set up
