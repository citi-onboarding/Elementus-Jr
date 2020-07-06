# Elementus-Jr

### Prerequisites

You will need install all dependencies, for that, go to **client** directory and run:

```bash
npm install
```

After, go to **server** directory and run:

```bash
npm install
```
After doing this, you need to add your IP address to the mongoDB whitelist.

Create **.env** file and copy the following content to it

```bash
PORT=3001
MONGO_URI=mongodb://ElementusC:VV2CMf47X8AFEcY@clusterej-shard-00-01.6jmt7.mongodb.net:27017/PROJECT-0?ssl=true&replicaSet=atlas-qlu6p1-shard-0&authSource=admin&retryWrites=true&w=majority
COOKIE_SECRET=37cf34ecb5221cdea658f6729fc48d75
CLOUDINARY_URL=cloudinary://879665239919491:1LepP4BIOx9MzxaLCoqDhHimDCU@djnvgbvjb
```

### Running in development
To run this project in development mode, we will need to run two servers, the react one on `/client` and keystone on `/server`.

The command to run react is `yarn start` or `npm start` depending on which tool was used on installation, the react server will run on port `3000` by default.

Before running the keystone server, go to `/server/updates/0.0.1-admin.js` and change the admin user as you want, this user will be the first created, but you will be able to create others and delete this one later.

To run keystoneJS server, use the command `node index.js`, the server will run on whatever port is in the variale in the env file, you will find the admin interface in `http://localhost:[PORT]/admin`

### Branches
They can be:
+ master
+ develop
+ feature
+ bugfix
+ hotfix

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _“Feature(name-of-feature): rest of commit…”._

Must be simple and show briefly what you just did.

Ex: `git commit -m "Feature(banner-parallax): Added the parallax effect to the background"`

### StyleGuides
- [AirBnb javascript styleguide](https://github.com/airbnb/javascript) for CommonJS code style
- [Eslint](https://eslint.org/) for real time error correcting

### Pull Requests

> This should be the structure of the description when creating a PR

```markdown
**What I Did:**

- Describe what you did
- Describe what you did

**How to Test:**

- Instruction for other people test your pull request
- Instruction for other people test your pull request
```

## Development Team

* **Samuel Miranda** - *Project Manager* - [labprogsam](https://github.com/labprogsam)
* **Arthur Luis** - *Fullstack Developer* - [ArthurLuis](https://github.com/ArthurLuis)
* **Giovani Albuquerque** - *Fullstack Developer* - [Giovaniavs](https://github.com/Giovaniavs)

## Design Team

* **Eduardo Almeida** - *Designer* - [eduqz](https://github.com/eduqz)

```markdown
Made with `markdown` and love by CITi
```
